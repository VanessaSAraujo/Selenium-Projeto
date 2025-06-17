import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

URL = "http://localhost:3000"

@pytest.fixture(scope="module")
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()

def acessar_login(driver):
    driver.get(URL)
    time.sleep(1)

def acessar_formulario_cadastro(driver):
    driver.get(URL)
    time.sleep(1)
    driver.find_element(By.XPATH, "//*[contains(text(), 'Cadastre-se')]").click()
    time.sleep(1)

def preencher_formulario(driver, nome, cpf, telefone, email, senha, confirmar_senha):
    driver.find_element(By.NAME, "name").send_keys(nome)
    driver.find_element(By.NAME, "cpf").send_keys(cpf)
    driver.find_element(By.NAME, "phone").send_keys(telefone)
    driver.find_element(By.NAME, "email").send_keys(email)
    driver.find_element(By.NAME, "password").send_keys(senha)
    driver.find_element(By.NAME, "confirmPassword").send_keys(confirmar_senha)
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    time.sleep(1)

def test_login_email_invalido(driver):
    acessar_login(driver)
    driver.find_element(By.NAME, "email").send_keys("emailinvalido")
    driver.find_element(By.NAME, "password").send_keys("12345678")
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    assert "email" in driver.page_source.lower()

def test_login_senha_curta(driver):
    acessar_login(driver)
    driver.find_element(By.NAME, "email").send_keys("teste@exemplo.com")
    driver.find_element(By.NAME, "password").send_keys("1234567")
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    assert "senha" in driver.page_source.lower()

def test_login_valido(driver):
    acessar_login(driver)
    driver.find_element(By.NAME, "email").send_keys("teste@exemplo.com")
    driver.find_element(By.NAME, "password").send_keys("12345678")
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    assert "login feito com sucesso" in driver.page_source.lower() or "login" in driver.page_source.lower()

def test_cadastro_email_invalido(driver):
    acessar_formulario_cadastro(driver)
    preencher_formulario(driver, "Usuário", "123.456.789-09", "(11) 91234-5678", "invalido@email@", "12345678", "12345678")
    assert "email" in driver.page_source.lower()

def test_cadastro_senhas_diferentes(driver):
    acessar_formulario_cadastro(driver)
    preencher_formulario(driver, "Usuário", "123.456.789-09", "(11) 91234-5678", "teste@exemplo.com", "Senha123", "Senha456")
    assert "iguais" in driver.page_source.lower() or "confirmar" in driver.page_source.lower()

def test_cadastro_senha_curta(driver):
    acessar_formulario_cadastro(driver)
    preencher_formulario(driver, "Usuário", "123.456.789-09", "(11) 91234-5678", "teste@exemplo.com", "1234567", "1234567")
    assert "senha" in driver.page_source.lower()

def test_cadastro_telefone_invalido(driver):
    acessar_formulario_cadastro(driver)
    preencher_formulario(driver, "Usuário", "123.456.789-09", "(11) 1234-5678", "teste@exemplo.com", "12345678", "12345678")
    assert "telefone" in driver.page_source.lower()

def test_cadastro_cpf_invalido(driver):
    acessar_formulario_cadastro(driver)
    preencher_formulario(driver, "Usuário", "123.456.789-00", "(11) 91234-5678", "teste@exemplo.com", "12345678", "12345678")
    assert "cpf" in driver.page_source.lower()

def test_cadastro_valido(driver):
    acessar_formulario_cadastro(driver)
    preencher_formulario(driver, "Usuário", "123.456.789-09", "(11) 91234-5678", "validado@exemplo.com", "12345678", "12345678")
    assert "cadastro realizado" in driver.page_source.lower() or "login" in driver.page_source.lower()

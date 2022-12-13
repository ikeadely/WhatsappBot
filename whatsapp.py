from selenium import webdriver
import openpyxl as excel 
import csv


PATH = "./chromedriver.exe"

# driver = webdriver.Chrome(PATH)

# driver.get("https://www.google.com/")

def bacaData(filename):
    file = excel.load_workbook(filename, data_only=True)
    setting = file['Setting']
    

    dataPesan = file['DataPesan']
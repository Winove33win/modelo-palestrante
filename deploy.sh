#!/bin/bash
# Script de deploy do site da landing page

# Nome do diretório
SITE_DIR="landingpage-palestrante"

# Criação da pasta do projeto
mkdir -p $SITE_DIR && cd $SITE_DIR

# Copiar arquivos existentes
cp ../index.html .
cp ../A_photograph_captures_a_middle-aged_male_speaker_w.png .

# Iniciar repositório Git
git init
git add .
git commit -m "Deploy inicial da landing page do palestrante"
git branch -M main

# Adicionar repositório remoto (substituir com seu link)
git remote add origin https://github.com/SEU_USUARIO/REPOSITORIO.git
git push -u origin main

echo "Deploy concluído! 🚀"

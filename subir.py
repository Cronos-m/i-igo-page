import os
import subprocess

# Colores para la terminal
VERDE = "\033[92m"
AMARILLO = "\033[33m"
ROJO = "\033[91m"
RESET = "\033[0m"

# Habilitar colores en la terminal de Windows
if os.name == 'nt':
    os.system('')

def ejecutar_comando(comando):
    resultado = subprocess.run(comando, shell=True, capture_output=True, text=True)
    if resultado.returncode != 0:
        print(f"{ROJO}Error: {resultado.stderr.strip()}{RESET}")
        return False
    return True

def main():
    print(f"{VERDE}=================================================={RESET}")
    print(f"{VERDE}       🚀 AUTOMATIZADOR DE DESPLIEGUE - GITHUB    {RESET}")
    print(f"{VERDE}=================================================={RESET}\n")
    
    # 1. git add .
    print(f"{AMARILLO}1. Añadiendo archivos modificados (git add .)...{RESET}")
    if not ejecutar_comando("git add ."):
        return

    # 2. Pedir mensaje de commit
    mensaje = input(f"\n{VERDE}✍️ Ingresa el mensaje del commit: {RESET}").strip()
    if not mensaje:
        mensaje = "Actualización automática del sitio web"

    # 3. git commit
    print(f"\n{AMARILLO}2. Guardando cambios locales (git commit)...{RESET}")
    if not ejecutar_comando(f'git commit -m "{mensaje}"'):
        print(f"{AMARILLO}ℹ️ Nota: Es posible que no hubiera cambios nuevos para confirmar.{RESET}")

    # 4. git push
    print(f"\n{AMARILLO}3. Subiendo cambios a GitHub (git push)...{RESET}")
    if ejecutar_comando("git push"):
        print(f"\n{VERDE}✨ ¡Listo! Los cambios se subieron con éxito a tu repositorio.{RESET}")
    else:
        print(f"\n{ROJO}❌ No se pudieron subir los cambios. Verifica tu conexión o autenticación.{RESET}")

if __name__ == "__main__":
    main()
import json
import os
import sys
import time

# Habilitar colores ANSI en la terminal de Windows
if os.name == 'nt':
    os.system('')

JSON_FILE = 'shows.json'

# Paleta de Colores (Verde brillante y acentos editoriales)
VERDE = "\033[92m"
ROJO = "\033[91m"
AMARILLO = "\033[33m"
BLANCO = "\033[97m"
RESET = "\033[0m"

def limpiar_pantalla():
    """Limpia completamente la terminal para que no quede ningún rastro previo."""
    os.system('cls' if os.name == 'nt' else 'clear')

def mostrar_bienvenida():
    """Muestra una pantalla de bienvenida limpia y elegante."""
    limpiar_pantalla()
    print(f"{VERDE}")
    print("==================================================")
    print("       ✨ GESTOR DE ESPECTÁCULOS - MAGO IÑIGO     ")
    print("==================================================")
    print(f"{RESET}")
    print(f"{BLANCO} Inicializando sistema editorial nocturno...{RESET}")
    time.sleep(1.2)

# Configuración para leer las flechas del teclado sin presionar Enter
if os.name == 'nt':
    import msvcrt
    def leer_tecla():
        k = msvcrt.getch()
        if k == b'\xe0':
            k2 = msvcrt.getch()
            if k2 == b'H': return 'UP'
            if k2 == b'P': return 'DOWN'
        elif k == b'\r':
            return 'ENTER'
        return None
else:
    import tty, termios
    def leer_tecla():
        fd = sys.stdin.fileno()
        old_settings = termios.tcgetattr(fd)
        try:
            tty.setraw(sys.stdin.fileno())
            ch = sys.stdin.read(1)
            if ch == '\x1b':
                ch2 = sys.stdin.read(1)
                ch3 = sys.stdin.read(1)
                if ch2 == '[':
                    if ch3 == 'A': return 'UP'
                    if ch3 == 'B': return 'DOWN'
            elif ch == '\n' or ch == '\r':
                return 'ENTER'
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
        return None

def menu_con_flechas(titulo, opciones):
    """Muestra un menú interactivo navegable mediante las flechas del teclado."""
    seleccion = 0
    while True:
        limpiar_pantalla()
        print(f"{VERDE}==================================================")
        print(f" {titulo}")
        print("==================================================")
        print(f"{AMARILLO}Usa las flechas ⬆ ⬇ para moverte y presiona ENTER:{RESET}\n")
        
        for i, opcion in enumerate(opciones):
            if i == seleccion:
                print(f" {VERDE}▶ [{opcion}]{RESET}")
            else:
                print(f"   {BLANCO}{opcion}{RESET}")
                
        tecla = leer_tecla()
        if tecla == 'UP':
            seleccion = (seleccion - 1) % len(opciones)
        elif tecla == 'DOWN':
            seleccion = (seleccion + 1) % len(opciones)
        elif tecla == 'ENTER':
            return seleccion

def cargar_shows():
    if not os.path.exists(JSON_FILE):
        return []
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except:
            return []

def guardar_shows(shows):
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(shows, f, ensure_ascii=False, indent=2)

def main():
    mostrar_bienvenida()
    while True:
        opciones_menu = [
            "📜 Ver lista de espectáculos",
            "➕ Agregar un nuevo espectáculo",
            "✏️ Editar un espectáculo existente",
            "👁️ Activar / Ocultar espectáculo",
            "🚪 Salir del programa"
        ]
        
        eleccion = menu_con_flechas("🎩 MENÚ PRINCIPAL", opciones_menu)
        
        if eleccion == 0:
            shows = cargar_shows()
            limpiar_pantalla()
            print(f"{VERDE}=== CATÁLOGO ACTUAL DE ESPECTÁCULOS ==={RESET}\n")
            if not shows:
                print(f"{ROJO}No hay espectáculos registrados.{RESET}")
            else:
                for s in shows:
                    estado = f"{VERDE}🟢 Activo{RESET}" if s.get('activo', True) else f"{ROJO}🔴 Oculto{RESET}"
                    popular = f"{AMARILLO}⭐ [Destacado]{RESET}" if s.get('popular') else ""
                    print(f"• ID {s['id']}: {BLANCO}{s['titulo_es']}{RESET} (${s['precio']} USD) - {s['duracion']} {popular} [{estado}]")
            print(f"\n{AMARILLO}Presiona ENTER para volver al menú principal...{RESET}")
            input()
            
        elif eleccion == 1:
            limpiar_pantalla()
            print(f"{VERDE}=== AGREGAR NUEVO ESPECTÁCULO ==={RESET}\n")
            shows = cargar_shows()
            nuevo_id = max([s['id'] for s in shows], default=0) + 1
            
            titulo_es = input(f"{BLANCO}Nombre en ESPAÑOL: {RESET}")
            titulo_en = input(f"{BLANCO}Nombre en INGLÉS: {RESET}")
            duracion = input(f"{BLANCO}Duración (ej: 45 min): {RESET}")
            try:
                precio = float(input(f"{BLANCO}Precio USD (ej: 150): {RESET}"))
            except:
                precio = 100
            desc_es = input(f"{BLANCO}Descripción corta (ES): {RESET}")
            desc_en = input(f"{BLANCO}Descripción corta (EN): {RESET}")
            imagen = input(f"{BLANCO}Nombre de la foto en 'img/' (ej: show.jpg): {RESET}")
            if not imagen.startswith("img/"):
                imagen_url = f"img/{imagen}"
            else:
                imagen_url = imagen
                
            es_pop = menu_con_flechas("¿Es un show destacado ('Más solicitado')?", ["No", "Sí"]) == 1
            
            nuevo = {
                "id": nuevo_id,
                "titulo_es": titulo_es,
                "titulo_en": titulo_en,
                "duracion": duracion,
                "precio": precio,
                "descripcion_es": desc_es,
                "descripcion_en": desc_en,
                "popular": es_pop,
                "imagen_url": imagen_url,
                "orden": len(shows) + 1,
                "activo": True
            }
            shows.append(nuevo)
            guardar_shows(shows)
            print(f"\n{VERDE}✅ ¡Espectáculo agregado con éxito!{RESET}")
            print(f"{AMARILLO}Presiona ENTER para continuar...{RESET}")
            input()
            
        elif eleccion == 2:
            shows = cargar_shows()
            if not shows:
                limpiar_pantalla()
                print(f"{ROJO}No hay shows para editar.{RESET}")
                input("Presiona ENTER...")
                continue
                
            nombres_shows = [s['titulo_es'] for s in shows] + ["🔙 Cancelar / Volver"]
            idx = menu_con_flechas("SELECCIONA EL SHOW A EDITAR", nombres_shows)
            if idx == len(shows):
                continue
                
            show = shows[idx]
            limpiar_pantalla()
            print(f"{VERDE}=== EDITANDO: {show['titulo_es']} ==={RESET}")
            print(f"{AMARILLO}Consejo: Si dejas un campo en blanco y presionas ENTER, se mantendrá el valor actual.{RESET}\n")
            
            t_es = input(f"Nombre ES [{show['titulo_es']}]: ").strip()
            if t_es: show['titulo_es'] = t_es
            
            t_en = input(f"Nombre EN [{show['titulo_en']}]: ").strip()
            if t_en: show['titulo_en'] = t_en
            
            dur = input(f"Duración [{show['duracion']}]: ").strip()
            if dur: show['duracion'] = dur
            
            pr = input(f"Precio USD [{show['precio']}]: ").strip()
            if pr:
                try: show['precio'] = float(pr)
                except: pass
                
            d_es = input(f"Descripción ES [{show['descripcion_es']}]: ").strip()
            if d_es: show['descripcion_es'] = d_es
            
            d_en = input(f"Descripción EN [{show['descripcion_en']}]: ").strip()
            if d_en: show['descripcion_en'] = d_en
            
            img = input(f"Imagen [{show['imagen_url']}]: ").strip()
            if img:
                show['imagen_url'] = f"img/{img}" if not img.startswith("img/") else img
                
            guardar_shows(shows)
            print(f"\n{VERDE}✅ ¡Cambios guardados con éxito!{RESET}")
            input("Presiona ENTER...")
            
        elif eleccion == 3:
            shows = cargar_shows()
            if not shows: continue
            nombres_shows = [f"{s['titulo_es']} ({'Activo' if s.get('activo', True) else 'Oculto'})" for s in shows] + ["🔙 Cancelar"]
            idx = menu_con_flechas("ACTIVAR / OCULTAR ESPECTÁCULO", nombres_shows)
            if idx == len(shows): continue
            
            shows[idx]['activo'] = not shows[idx].get('activo', True)
            guardar_shows(shows)
            print(f"\n{VERDE}✅ ¡Estado actualizado con éxito!{RESET}")
            input("Presiona ENTER...")
            
        elif eleccion == 4:
            limpiar_pantalla()
            print(f"{VERDE}¡Gracias por usar el gestor del Mago Iñigo! ✨{RESET}\n")
            break

if __name__ == '__main__':
    main()
import http.server
import socketserver
import webbrowser
import os
import sys
import socket

PORT = 8085
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class VillaElenaHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        if self.path in ('/', '', '/index', '/index.html'):
            self.path = '/index.html'
        return super().do_GET()

    def log_message(self, format, *args):
        # Evitar inundación de logs en consola
        pass

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex(('127.0.0.1', port)) == 0

def start_server():
    candidate_ports = [PORT, 8086, 8080, 5000, 3001]
    actual_port = None
    httpd = None

    for p in candidate_ports:
        if is_port_in_use(p):
            continue
        try:
            socketserver.TCPServer.allow_reuse_address = True
            httpd = socketserver.ThreadingTCPServer(('127.0.0.1', p), VillaElenaHandler)
            actual_port = p
            break
        except Exception:
            continue

    if not httpd:
        # Si todos están ocupados, usar el primero que responda
        actual_port = PORT
        print(f"[STATUS] El puerto {PORT} ya está en uso. Abriendo navegador...")
        webbrowser.open(f"http://127.0.0.1:{PORT}")
        return

    url = f"http://127.0.0.1:{actual_port}"
    print(f"================================================================")
    print(f"  VILLA ELENA MIRADOR & ECO-RESORT (PAIPA, BOYACÁ)")
    print(f"  Servidor Local Activo: {url}")
    print(f"================================================================")

    if '--no-open' not in sys.argv:
        try:
            webbrowser.open(url)
        except Exception as e:
            print(f"[WARN] No se pudo abrir automáticamente el navegador: {e}")

    try:
        httpd.serve_forever()
    except (KeyboardInterrupt, SystemExit):
        print("\n[INFO] Servidor Villa Elena detenido con éxito.")
    finally:
        httpd.server_close()

if __name__ == '__main__':
    start_server()

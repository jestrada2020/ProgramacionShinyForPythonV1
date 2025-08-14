// Consolidated modules data
const modules = {
    intro: {
        title: "1. Introducción a Shiny for Python",
        description: "Aplicaciones web reactivas con Python",
        video: "https://www.youtube.com/embed/B4C_ksqM5eI",
        additionalVideos: [
            { title: "Shiny for Python - Complete Tutorial", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Build Web Apps with Python - Shiny Tutorial", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Python Shiny Dashboard Tutorial", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Interactive Web Apps with Shiny for Python", url: "https://www.youtube.com/embed/HgbNNgWy7P8" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">¿Qué es Shiny for Python?</h2>
            <p class="theme-text-secondary mb-4">Shiny for Python es un framework revolucionario que permite crear aplicaciones web interactivas y reactivas usando Python puro. Elimina la complejidad del manejo manual de estado y permite construir dashboards profesionales sin conocimiento profundo de HTML, CSS o JavaScript.</p>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-2">🚀 ¿Qué hace especial a Shiny?</h4>
                <p class="text-sm theme-text-secondary">Shiny usa "transparent reactivity" - automáticamente rastrea las dependencias entre componentes y minimiza el re-renderizado innecesario, enfocándose en entregar insights en lugar de resolver problemas técnicos.</p>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Características Clave</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">🔄 Programación Reactiva</h4>
                    <p class="text-sm theme-text-secondary">Gestión automática de estado y rutas de ejecución</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">⚡ Renderizado Eficiente</h4>
                    <p class="text-sm theme-text-secondary">Actualización bajo demanda y mínimo re-renderizado</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">🐍 Ecosistema Python</h4>
                    <p class="text-sm theme-text-secondary">Integración perfecta con pandas, plotly, matplotlib</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">🏗️ Arquitectura Moderna</h4>
                    <p class="text-sm theme-text-secondary">Construido sobre Starlette y asyncio</p>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Casos de Uso Reales</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">📊 Dashboards Interactivos</h4>
                    <p class="text-sm theme-text-secondary mb-2">Visualización de datos en tiempo real con capacidades avanzadas</p>
                    <ul class="text-xs theme-text-secondary list-disc list-inside">
                        <li>Métricas de negocio en tiempo real</li>
                        <li>Análisis financiero interactivo</li>
                        <li>Monitoreo de sistemas</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">🤖 Aplicaciones con IA</h4>
                    <p class="text-sm theme-text-secondary mb-2">Interfaces intuitivas para modelos de machine learning</p>
                    <ul class="text-xs theme-text-secondary list-disc list-inside">
                        <li>Consultas de datos habilitadas por IA</li>
                        <li>Predicciones interactivas</li>
                        <li>Análisis de sentimientos</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">🔬 Simulaciones Científicas</h4>
                    <p class="text-sm theme-text-secondary mb-2">Modelado y visualización de fenómenos complejos</p>
                    <ul class="text-xs theme-text-secondary list-disc list-inside">
                        <li>Simulador de órbitas de tres cuerpos</li>
                        <li>Modelos epidemiológicos</li>
                        <li>Análisis de datos geoespaciales</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Primeros Pasos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">Instalación Simple</h4>
                <pre class="bg-black text-green-400 p-3 rounded text-sm mb-3"><code>pip install shiny</code></pre>
                <h4 class="font-semibold theme-text-primary mb-2">Crear tu Primera App</h4>
                <pre class="bg-black text-green-400 p-3 rounded text-sm"><code>shiny create --template dashboard my-first-app</code></pre>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🚀 Shiny for Python en Google Colab - Guía Completa</h4>
                <p class="theme-text-secondary mb-4">Aprende a instalar y configurar Shiny for Python en Google Colab paso a paso. Esta guía te permitirá crear aplicaciones web interactivas directamente en la nube.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                    <p class="text-sm theme-text-secondary mt-2">Abre un nuevo notebook para seguir esta guía</p>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg border-l-4 border-blue-500">
                        <h5 class="font-semibold theme-text-primary mb-3">🔧 PASO 1: Instalación de Shiny for Python</h5>
                        <p class="text-sm theme-text-secondary mb-3">Primero instalemos Shiny y todas las dependencias necesarias:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># PASO 1: Instalar Shiny for Python y dependencias<br>
!pip install shiny<br>
!pip install pandas numpy matplotlib seaborn plotly<br>
!pip install ipywidgets<br>
<br>
# Verificar la instalación<br>
import shiny<br>
print(f"✅ Shiny {shiny.__version__} instalado correctamente")<br>
print("🎉 ¡Listo para crear aplicaciones web!")</code>
                        </div>
                        <div class="text-xs theme-text-secondary bg-blue-50 p-2 rounded">
                            <i class="fas fa-info-circle mr-1"></i><strong>Importante:</strong> Ejecuta este código en la primera celda de tu notebook
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg border-l-4 border-green-500">
                        <h5 class="font-semibold theme-text-primary mb-3">🚀 PASO 2: Tu Primera App Shiny en Colab</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crear una aplicación Shiny básica que funcione en Colab:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># PASO 2: Primera aplicación Shiny<br>
from shiny import App, ui, render<br>
import asyncio<br>
import nest_asyncio<br>
<br>
# Permitir loops anidados (necesario en Colab)<br>
nest_asyncio.apply()<br>
<br>
# Definir la interfaz de usuario<br>
app_ui = ui.page_fluid(<br>
&nbsp;&nbsp;&nbsp;&nbsp;ui.h1("🎉 Mi Primera App Shiny en Colab"),<br>
&nbsp;&nbsp;&nbsp;&nbsp;ui.input_slider("numero", "Selecciona un número:", min=1, max=100, value=50),<br>
&nbsp;&nbsp;&nbsp;&nbsp;ui.output_text("resultado")<br>
)<br>
<br>
# Definir la lógica del servidor<br>
def server(input, output, session):<br>
&nbsp;&nbsp;&nbsp;&nbsp;@output<br>
&nbsp;&nbsp;&nbsp;&nbsp;@render.text<br>
&nbsp;&nbsp;&nbsp;&nbsp;def resultado():<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numero = input.numero()<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cuadrado = numero ** 2<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"🔢 El número {numero} elevado al cuadrado es: {cuadrado}"<br>
<br>
# Crear la aplicación<br>
app = App(app_ui, server)<br>
print("✅ Aplicación Shiny creada exitosamente")</code>
                        </div>
                        <div class="text-xs theme-text-secondary bg-green-50 p-2 rounded">
                            <i class="fas fa-lightbulb mr-1"></i><strong>Tip:</strong> nest_asyncio es necesario para que Shiny funcione en entornos Jupyter/Colab
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg border-l-4 border-purple-500">
                        <h5 class="font-semibold theme-text-primary mb-3">🌐 PASO 3: Ejecutar la App (Métodos Probados)</h5>
                        <p class="text-sm theme-text-secondary mb-3"><strong>Recomendación:</strong> Usa el Método 1 para empezar, luego el Método 2 para compartir. Ngrok ahora requiere registro obligatorio.</p>
                        
                        <div class="mb-4 bg-green-50 p-3 rounded border-2 border-green-200">
                            <h6 class="font-semibold theme-text-primary mb-2">✅ Método 1: Ejecución Local (RECOMENDADO)</h6>
                            <p class="text-xs text-green-700 mb-2"><strong>✨ Funciona siempre - Sin configuración adicional</strong></p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-2">
                                <code># Método 1: Ejecutar localmente en Colab<br>
import threading<br>
import time<br>
from IPython.display import HTML, display<br>
<br>
# Función para ejecutar la app<br>
def run_app():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("🚀 Iniciando aplicación Shiny...")<br>
&nbsp;&nbsp;&nbsp;&nbsp;app.run(host="127.0.0.1", port=8000, launch_browser=False)<br>
<br>
# Ejecutar en hilo separado<br>
thread = threading.Thread(target=run_app, daemon=True)<br>
thread.start()<br>
time.sleep(2)<br>
<br>
print("✅ ¡App Shiny ejecutándose exitosamente!")<br>
print("🌐 Acceso: http://127.0.0.1:8000")<br>
print("📝 Nota: Funcional dentro de este entorno de Colab")<br>
<br>
# Mostrar enlace clickeable<br>
display(HTML('<a href="http://127.0.0.1:8000" target="_blank" style="background: #4285f4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">🚀 Abrir App Shiny</a>'))</code>
                            </div>
                            <div class="text-xs text-green-700">
                                <i class="fas fa-thumbs-up mr-1"></i><strong>Ventajas:</strong> Instantáneo, sin dependencias, perfecto para desarrollo y testing
                            </div>
                        </div>
                        
                        <div class="mb-4 bg-blue-50 p-3 rounded border-2 border-blue-200">
                            <h6 class="font-semibold theme-text-primary mb-2">🌍 Método 2: Acceso Público con Localtunnel</h6>
                            <p class="text-xs text-blue-700 mb-2"><strong>🌐 Para compartir tu app con otros - Sin registro requerido</strong></p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-2">
                                <code># Método 2: Acceso público con localtunnel<br>
!npm install -g localtunnel<br>
<br>
import subprocess<br>
import threading<br>
import time<br>
import re<br>
<br>
# Ejecutar la app en background<br>
def run_app():<br>
&nbsp;&nbsp;&nbsp;&nbsp;app.run(host="127.0.0.1", port=8000, launch_browser=False)<br>
<br>
thread = threading.Thread(target=run_app, daemon=True)<br>
thread.start()<br>
time.sleep(3)<br>
<br>
print("🌐 Creando acceso público...")<br>
<br>
# Ejecutar localtunnel y capturar URL<br>
try:<br>
&nbsp;&nbsp;&nbsp;&nbsp;result = subprocess.run(['npx', 'localtunnel', '--port', '8000'], <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;capture_output=True, text=True, timeout=10)<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"✅ ¡Túnel público creado!")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"🎆 Tu app ya está disponible en Internet")<br>
except:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("🔄 Ejecutando en background...")<br>
&nbsp;&nbsp;&nbsp;&nbsp;!npx localtunnel --port 8000 &<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("🔍 Busca la URL en la salida de arriba")</code>
                            </div>
                            <div class="text-xs text-blue-700">
                                <i class="fas fa-share-alt mr-1"></i><strong>Ventajas:</strong> URL pública, compartir con cualquiera, sin registro
                            </div>
                        </div>
                        
                        <div class="mb-4 bg-yellow-50 p-3 rounded border-2 border-yellow-200">
                            <h6 class="font-semibold theme-text-primary mb-2">🔑 Método 3: Cloudflare Tunnel (Alternativa Premium)</h6>
                            <p class="text-xs text-yellow-700 mb-2"><strong>🎆 Alternativa estable - Requiere registro gratuito en Cloudflare</strong></p>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-2">
                                <code># Método 3: Cloudflare Tunnel (si quieres una alternativa robusta)<br>
<br>
# Ejecutar la app primero<br>
import threading<br>
import time<br>
<br>
def run_app():<br>
&nbsp;&nbsp;&nbsp;&nbsp;app.run(host="127.0.0.1", port=8000, launch_browser=False)<br>
<br>
thread = threading.Thread(target=run_app, daemon=True)<br>
thread.start()<br>
time.sleep(3)<br>
<br>
print("🎆 App ejecutándose en puerto 8000")<br>
print("📝 Para acceso público estable:")<br>
print("1. Visita: https://dash.cloudflare.com/")<br>
print("2. Crea cuenta gratuita")<br>
print("3. Usa Cloudflare Tunnel para exponer puerto 8000")<br>
print("")<br>
print("💡 RECOMENDACIÓN: Usa Método 1 o 2 para simplicidad")<br>
print("✅ Tu app funciona perfectamente con Método 1 para desarrollo")</code>
                            </div>
                            <div class="text-xs text-yellow-700">
                                <i class="fas fa-info-circle mr-1"></i><strong>Nota:</strong> Solo si necesitas URLs permanentes y estables
                            </div>
                        </div>
                        
                        <div class="text-sm theme-text-secondary bg-green-100 p-3 rounded border-l-4 border-green-500">
                            <div class="font-semibold text-green-800 mb-2">🎯 Guía Rápida de Decisión:</div>
                            <ul class="text-xs text-green-700 space-y-1">
                                <li>• <strong>Para aprender y desarrollar:</strong> Usa Método 1 🚀</li>
                                <li>• <strong>Para mostrar a amigos/colegas:</strong> Usa Método 2 🌍</li>
                                <li>• <strong>Para producción seria:</strong> Considera Shiny Live o Streamlit Cloud</li>
                                <li>• <strong>Si ngrok falla:</strong> Es normal, los métodos 1 y 2 funcionan mejor</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg border-l-4 border-orange-500">
                        <h5 class="font-semibold theme-text-primary mb-3">📊 PASO 4: App Avanzada con Gráficos</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crear una aplicación más sofisticada con visualizaciones:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># PASO 4: Dashboard con gráficos interactivos<br>
from shiny import App, ui, render<br>
import pandas as pd<br>
import plotly.express as px<br>
import numpy as np<br>
<br>
# Crear datos de ejemplo<br>
np.random.seed(42)<br>
df = pd.DataFrame({<br>
&nbsp;&nbsp;&nbsp;&nbsp;'x': np.random.randn(100),<br>
&nbsp;&nbsp;&nbsp;&nbsp;'y': np.random.randn(100),<br>
&nbsp;&nbsp;&nbsp;&nbsp;'categoria': np.random.choice(['A', 'B', 'C'], 100)<br>
})<br>
<br>
# UI del dashboard<br>
dashboard_ui = ui.page_fluid(<br>
&nbsp;&nbsp;&nbsp;&nbsp;ui.h1("📊 Dashboard Interactivo en Colab"),<br>
&nbsp;&nbsp;&nbsp;&nbsp;ui.layout_sidebar(<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.panel_sidebar(<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.input_select("categoria", "Filtrar por categoría:", <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;choices=["Todas", "A", "B", "C"], selected="Todas"),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.input_slider("puntos", "Número de puntos:", min=10, max=100, value=50)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.panel_main(<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.output_plot("grafico"),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.output_data_frame("tabla")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br>
&nbsp;&nbsp;&nbsp;&nbsp;)<br>
)<br>
<br>
# Lógica del servidor<br>
def dashboard_server(input, output, session):<br>
&nbsp;&nbsp;&nbsp;&nbsp;@output<br>
&nbsp;&nbsp;&nbsp;&nbsp;@render.plot<br>
&nbsp;&nbsp;&nbsp;&nbsp;def grafico():<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = df.head(input.puntos())<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if input.categoria() != "Todas":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = data[data['categoria'] == input.categoria()]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fig = px.scatter(data, x='x', y='y', color='categoria',<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title="Gráfico de Dispersión Interactivo")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return fig<br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;@output<br>
&nbsp;&nbsp;&nbsp;&nbsp;@render.data_frame<br>
&nbsp;&nbsp;&nbsp;&nbsp;def tabla():<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = df.head(input.puntos())<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if input.categoria() != "Todas":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = data[data['categoria'] == input.categoria()]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return data<br>
<br>
# Crear la app del dashboard<br>
dashboard_app = App(dashboard_ui, dashboard_server)<br>
print("✅ Dashboard avanzado creado exitosamente")</code>
                        </div>
                        <div class="text-xs theme-text-secondary bg-orange-50 p-2 rounded">
                            <i class="fas fa-chart-line mr-1"></i><strong>Características:</strong> Sidebar, filtros, gráficos Plotly y tablas dinámicas
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg border-l-4 border-red-500">
                        <h5 class="font-semibold theme-text-primary mb-3">🛠️ PASO 5: Ejecutar el Dashboard</h5>
                        <p class="text-sm theme-text-secondary mb-3">Ejecutar el dashboard avanzado (elige tu método preferido):</p>
                        
                        <div class="mb-4">
                            <h6 class="font-semibold theme-text-primary mb-2">🎨 Opción A: Ejecución Simple</h6>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-2">
                                <code># Opción A: Ejecutar dashboard localmente<br>
import threading<br>
import time<br>
<br>
# Función para ejecutar el dashboard<br>
def run_dashboard():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("🎨 Iniciando Dashboard Shiny...")<br>
&nbsp;&nbsp;&nbsp;&nbsp;dashboard_app.run(host="127.0.0.1", port=8001, launch_browser=False)<br>
<br>
# Ejecutar dashboard<br>
dashboard_thread = threading.Thread(target=run_dashboard, daemon=True)<br>
dashboard_thread.start()<br>
<br>
print("✅ Dashboard ejecutándose en http://127.0.0.1:8001")<br>
print("📊 Incluye: filtros, gráficos Plotly, tablas dinámicas")<br>
print("📝 Acceso: Solo desde este notebook")</code>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h6 class="font-semibold theme-text-primary mb-2">🌍 Opción B: Con Localtunnel</h6>
                            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-2">
                                <code># Opción B: Dashboard con acceso público<br>
import threading<br>
import time<br>
import subprocess<br>
<br>
# Ejecutar dashboard<br>
def run_dashboard():<br>
&nbsp;&nbsp;&nbsp;&nbsp;dashboard_app.run(host="127.0.0.1", port=8001, launch_browser=False)<br>
<br>
dashboard_thread = threading.Thread(target=run_dashboard, daemon=True)<br>
dashboard_thread.start()<br>
time.sleep(3)<br>
<br>
# Crear túnel público<br>
print("🌐 Creando acceso público al dashboard...")<br>
!lt --port 8001 &<br>
<br>
print("✅ Dashboard con acceso público creado!")<br>
print("🔍 Busca la URL en la salida de arriba")<br>
print("🎆 Tu dashboard ya está disponible en Internet")</code>
                            </div>
                        </div>
                        
                        <div class="text-xs theme-text-secondary bg-red-50 p-2 rounded">
                            <i class="fas fa-rocket mr-1"></i><strong>¡Felicidades!</strong> Dashboard completo con filtros, gráficos interactivos y tablas reactivas
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg border-l-4 border-gray-500">
                        <h5 class="font-semibold theme-text-primary mb-3">📝 Solución de Problemas y Mejores Prácticas</h5>
                        <div class="space-y-3">
                            <div class="text-sm theme-text-secondary">
                                <h6 class="font-semibold text-black mb-1">✅ Solución a Errores de Ngrok:</h6>
                                <p><strong>Ngrok ahora requiere registro obligatorio.</strong> ¡No te preocupes! Los Métodos 1 y 2 funcionan perfectamente sin necesidad de registro. Método 1 es ideal para desarrollo, Método 2 para compartir.</p>
                            </div>
                            <div class="text-sm theme-text-secondary">
                                <h6 class="font-semibold text-black mb-1">🔄 Reinicios de Sesión:</h6>
                                <p>Si Colab reinicia, ejecuta solo los pasos 1-2 nuevamente. Los paquetes instalados se pierden en reinicios.</p>
                            </div>
                            <div class="text-sm theme-text-secondary">
                                <h6 class="font-semibold text-black mb-1">🔒 URLs Temporales:</h6>
                                <p>Las URLs de túneles cambian en cada ejecución. Copia y guarda la URL actual para compartir.</p>
                            </div>
                            <div class="text-sm theme-text-secondary">
                                <h6 class="font-semibold text-black mb-1">🛠️ Debug y Troubleshooting:</h6>
                                <p>Usa <code>print()</code> para debug. Si la app no responde, reinicia el kernel y ejecuta de nuevo.</p>
                            </div>
                            <div class="text-sm theme-text-secondary">
                                <h6 class="font-semibold text-black mb-1">⚡ Para Apps de Producción:</h6>
                                <p><strong>Colab es perfecto para aprender y prototipar.</strong> Para apps permanentes considera: <strong>Shiny Live</strong> (shinylive.io), <strong>Streamlit Cloud</strong>, <strong>Render.com</strong> (gratuito), o <strong>Railway.app</strong>.</p>
                            </div>
                            <div class="text-sm theme-text-secondary">
                                <h6 class="font-semibold text-black mb-1">📊 Optimización:</h6>
                                <p>Para mejor rendimiento en Colab, limita el número de puntos en gráficos (< 1000) y usa caché para datos grandes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg mt-6">
                    <h5 class="font-semibold theme-text-primary mb-2">🎉 ¡Resumen de lo que has logrado!</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>✅ <strong>Instalación robusta</strong> de Shiny for Python en Google Colab</li>
                        <li>✅ <strong>Múltiples métodos</strong> de ejecución (local, localtunnel, ngrok)</li>
                        <li>✅ <strong>Aplicaciones funcionales</strong> con interfaces reactivas</li>
                        <li>✅ <strong>Dashboard profesional</strong> con filtros y gráficos interactivos</li>
                        <li>✅ <strong>Solución de problemas</strong> integrada para errores comunes</li>
                        <li>✅ <strong>Acceso público</strong> opcional para compartir apps</li>
                    </ul>
                    <div class="mt-4 p-3 bg-blue-50 rounded">
                        <p class="text-sm text-blue-800"><i class="fas fa-graduation-cap mr-1"></i><strong>Próximos pasos:</strong> Experimenta con diferentes inputs, conecta bases de datos reales, y explora templates avanzados en <a href="https://shinylive.io/py/examples/" class="text-blue-600 underline">Shiny Live</a>!</p>
                    </div>
                    <div class="mt-3 p-3 bg-green-50 rounded">
                        <p class="text-sm text-green-800"><i class="fas fa-lightbulb mr-1"></i><strong>Tip Pro:</strong> Si tienes problemas con tunneling, siempre puedes usar el Método 1 para desarrollo y testing local en Colab.</p>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Tu primer programa",
                description: "Escribe un programa que imprima 'Hola, mundo!'",
                template: "# Escribe tu código aquí\nprint('Hola, mundo!')",
                solution: "print('Hola, mundo!')"
            },
            {
                title: "Variables básicas",
                description: "Crea una variable con tu nombre y muéstrala",
                template: "# Crea una variable llamada 'nombre' con tu nombre\n# Luego imprímela\n",
                solution: "nombre = 'Tu nombre'\nprint(nombre)"
            },
            {
                title: "Separadores en print()",
                description: "Practica con diferentes separadores en la función print().",
                template: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \" )\n    print(\"A\", \"B\", \"C\", sep=\" | \" )\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___\")",
                solution: "print(\"=== SEPARADORES EN PRINT() ===\")\n    \n    nombre = \"Juan\"\n    \n    # Separador por defecto (espacio)\n    print(\"Separador por defecto:\")\n    print(\"Hola\", nombre, \"!\")\n    print(\"Por defecto, print() usa un espacio como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Sin separador (cadena vacía)\n    print(\"Sin separador (sep=''):\")\n    print(\"Hola\", nombre, \"!\", sep=\"\")\n    print(\"Al usar sep='', las palabras se pegan sin espacio\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Separador personalizado con asteriscos\n    print(\"Separador personalizado (sep='***'):\")\n    print(\"Hola\", nombre, \"!\", sep=\"***\")\n    print(\"Podemos usar cualquier cadena como separador\")\n    \n    print(\"\n\" + \"-\" * 40)\n    \n    # Más ejemplos de separadores creativos\n    print(\"Otros separadores creativos:\")\n    print(\"Python\", \"es\", \"genial\", sep=\" -> \" )\n    print(\"A\", \"B\", \"C\", sep=\" | \" )\n    print(\"1\", \"2\", \"3\", sep=\"-\")\n    print(\"Palabra1\", \"Palabra2\", \"Palabra3\", sep=\"___\")"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es una característica principal de Python?",
                options: ["Sintaxis compleja", "Legibilidad del código", "Solo para web", "Difícil de aprender"],
                correct: 1
            },
            {
                question: "¿Python es un lenguaje interpretado?",
                options: ["Sí", "No", "A veces", "Depende del sistema"],
                correct: 0
            },
            {
                question: "¿Quién creó el lenguaje Python?",
                options: ["James Gosling", "Guido van Rossum", "Brendan Eich", "Dennis Ritchie"],
                correct: 1
            },
            {
                question: "¿En qué año fue lanzado por primera vez Python?",
                options: ["1989", "1991", "1995", "2000"],
                correct: 1
            },
            {
                question: "¿Cuál es la extensión de archivo para scripts de Python?",
                options: [".py", ".python", ".pt", ".pyt"],
                correct: 0
            },
            {
                question: "¿Python es sensible a mayúsculas y minúsculas?",
                options: ["Sí", "No", "Solo en funciones", "Solo en variables"],
                correct: 0
            },
            {
                question: "¿Cuál de estos NO es un tipo de dato básico en Python?",
                options: ["int", "float", "string", "char"],
                correct: 3
            },
            {
                question: "¿Qué significa que Python sea multiplataforma?",
                options: ["Solo funciona en Windows", "Funciona en diferentes sistemas operativos", "Solo funciona en Linux", "Necesita compilación específica"],
                correct: 1
            },
            {
                question: "¿Cuál es el paradigma principal de programación que soporta Python?",
                options: ["Solo orientado a objetos", "Solo funcional", "Multiparadigma", "Solo procedural"],
                correct: 2
            },
            {
                question: "¿Python utiliza llaves {} para delimitar bloques de código?",
                options: ["Sí, siempre", "No, usa indentación", "Solo en funciones", "Solo en clases"],
                correct: 1
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🚀 Shiny Live - Tu Laboratorio Interactivo</h4>
                <p class="theme-text-secondary mb-4">Experimenta con Shiny for Python directamente en tu navegador sin instalación. Shiny Live es el entorno perfecto para aprender y prototipar aplicaciones reactivas.</p>
                
                <div class="grid md:grid-cols-2 gap-4 mb-6">
                    <a href="https://shinylive.io/py/examples/" target="_blank" class="block p-4 theme-bg-tertiary rounded-lg hover:shadow-lg transition-all">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <i class="fas fa-code text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-semibold theme-text-primary">Ejemplos Oficiales</h5>
                                <p class="text-sm theme-text-secondary">Galería completa de apps Shiny</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://shinylive.io/py/editor/" target="_blank" class="block p-4 theme-bg-tertiary rounded-lg hover:shadow-lg transition-all">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                <i class="fas fa-edit text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-semibold theme-text-primary">Editor Online</h5>
                                <p class="text-sm theme-text-secondary">Crea tu app desde cero</p>
                            </div>
                        </div>
                    </a>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🎯 App Básica: Slider Interactivo</h5>
                        <p class="text-sm theme-text-secondary mb-3">Copia y pega este código en Shiny Live:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto mb-3"><code>from shiny.express import input, render, ui

ui.input_slider("val", "Selecciona un valor", min=0, max=100, value=50)

@render.text
def slider_val():
    return f"Valor seleccionado: {input.val()}"</code></pre>
                        <div class="text-xs theme-text-secondary">
                            <i class="fas fa-lightbulb mr-1"></i>Este ejemplo muestra la reactividad básica de Shiny
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">📊 Dashboard con Gráficos</h5>
                        <p class="text-sm theme-text-secondary mb-3">App más avanzada con visualizaciones:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto mb-3"><code>from shiny.express import input, render, ui
import matplotlib.pyplot as plt
import numpy as np

ui.input_slider("n", "Número de puntos", min=10, max=100, value=50)
ui.input_select("color", "Color", choices=["blue", "red", "green"])

@render.plot
def scatter_plot():
    n = input.n()
    color = input.color()
    
    x = np.random.randn(n)
    y = np.random.randn(n)
    
    plt.figure(figsize=(8, 6))
    plt.scatter(x, y, c=color, alpha=0.6)
    plt.title(f"Gráfico de dispersión con {n} puntos")
    plt.xlabel("X")
    plt.ylabel("Y")
    return plt.gcf()</code></pre>
                        <div class="text-xs theme-text-secondary">
                            <i class="fas fa-chart-line mr-1"></i>Combina controles interactivos con visualizaciones
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🔢 Calculadora Reactiva</h5>
                        <p class="text-sm theme-text-secondary mb-3">Inputs múltiples trabajando juntos:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto mb-3"><code>from shiny.express import input, render, ui

ui.h2("Calculadora Simple")

with ui.layout_columns():
    ui.input_numeric("num1", "Primer número", value=10)
    ui.input_numeric("num2", "Segundo número", value=5)
    ui.input_select("operation", "Operación", 
                   choices={"+": "Suma", "-": "Resta", 
                           "*": "Multiplicación", "/": "División"})

@render.text
def result():
    n1, n2, op = input.num1(), input.num2(), input.operation()
    
    if op == "+":
        result = n1 + n2
    elif op == "-":
        result = n1 - n2
    elif op == "*":
        result = n1 * n2
    elif op == "/":
        result = n1 / n2 if n2 != 0 else "Error: División por cero"
    
    return f"Resultado: {result}"</code></pre>
                        <div class="text-xs theme-text-secondary">
                            <i class="fas fa-calculator mr-1"></i>Múltiples inputs reactivos trabajando en conjunto
                        </div>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg mt-6">
                    <h5 class="font-semibold theme-text-primary mb-2">💡 Consejos para Shiny Live:</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• <strong>Experimenta libremente:</strong> No necesitas instalar nada</li>
                        <li>• <strong>Guarda tu trabajo:</strong> Usa el botón de descarga para exportar tu código</li>
                        <li>• <strong>Comparte fácilmente:</strong> Las URLs se actualizan automáticamente</li>
                        <li>• <strong>Aprende por ejemplos:</strong> Modifica los ejemplos existentes</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    interpreter: {
        title: "2. Instalación y Configuración de Shiny",
        description: "Preparando el entorno de desarrollo",
        video: "https://www.youtube.com/embed/B4C_ksqM5eI",
        additionalVideos: [
            { title: "Install Shiny for Python - Setup Guide", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Python Environment Setup for Shiny", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "VS Code Setup for Shiny Development", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Virtual Environments for Shiny Projects", url: "https://www.youtube.com/embed/VtchVpoSdoQ" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Configuración del Entorno Shiny for Python</h2>
            <p class="theme-text-secondary mb-4">Shiny for Python requiere Python 3.8+ y utiliza tecnologías modernas como Starlette y asyncio. Configuremos tu entorno de desarrollo profesional paso a paso.</p>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-2">🛠️ Requisitos del Sistema</h4>
                <ul class="text-sm theme-text-secondary space-y-1">
                    <li>• Python 3.8 o superior</li>
                    <li>• pip o conda para gestión de paquetes</li>
                    <li>• Navegador web moderno</li>
                    <li>• Editor de código (VS Code recomendado)</li>
                </ul>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Instalación Completa</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Instalación Básica</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code># Instalar Shiny for Python
pip install shiny</code></pre>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Instalación Completa con Dependencias</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code># Stack completo para ciencia de datos
pip install shiny[dev] pandas plotly matplotlib seaborn numpy</code></pre>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Verificar Instalación</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code># Verificar que Shiny está instalado correctamente
python -c "import shiny; print(f'Shiny {shiny.__version__} instalado correctamente')"</code></pre>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear tu Primera App</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Usando Templates Oficiales</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code># App básica
shiny create my-first-app

# Dashboard avanzado
shiny create --template dashboard my-dashboard

# App con layout de sidebar
shiny create --template sidebar my-sidebar-app</code></pre>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Estructura de Proyecto</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code>my-shiny-project/
├── app.py              # Aplicación principal
├── requirements.txt    # Dependencias
├── static/            # Archivos estáticos (CSS, JS, imágenes)
└── data/              # Datos de la aplicación</code></pre>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Ejecutar y Desarrollar</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Modo Desarrollo</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code># Auto-recarga en desarrollo
shiny run app.py --reload --port 8000

# Con debug habilitado
shiny run app.py --reload --debug</code></pre>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Modo Producción</h4>
                    <pre class="bg-black text-green-400 p-3 rounded text-sm mb-2"><code># Para despliegue en producción
shiny run app.py --host 0.0.0.0 --port 80</code></pre>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Entornos de Desarrollo Recomendados</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">💻 VS Code</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• Extensión Python oficial</li>
                        <li>• Pylance para IntelliSense</li>
                        <li>• Terminal integrado</li>
                        <li>• Debug interactivo</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📦 PyCharm</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• Soporte web integrado</li>
                        <li>• Debugging avanzado</li>
                        <li>• Git integrado</li>
                        <li>• Herramientas de refactoring</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📓 Jupyter</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• Prototipado rápido</li>
                        <li>• Experimentación interactiva</li>
                        <li>• Visualizaciones inline</li>
                        <li>• Documentación rica</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🌐 Shiny Live</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• Sin instalación local</li>
                        <li>• Compartir instantáneamente</li>
                        <li>• Perfecto para aprender</li>
                        <li>• Ejemplos integrados</li>
                    </ul>
                </div>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🐍 Intérprete de Python en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Explora las características del intérprete de Python directamente en Colab.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔍 Ejercicio 1: Información del intérprete</h5>
                        <p class="text-sm theme-text-secondary mb-3">Descubre detalles sobre el intérprete de Python:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code>import sys<br>
import platform<br>
<br>
print("🐍 INFORMACIÓN DEL INTÉRPRETE DE PYTHON")<br>
print("=" * 45)<br>
print(f"Versión de Python: {sys.version}")<br>
print(f"Versión corta: {sys.version_info}")<br>
print(f"Plataforma: {platform.platform()}")<br>
print(f"Arquitectura: {platform.architecture()}")<br>
print(f"Directorio ejecutable: {sys.executable}")<br>
print(f"Path de Python: {sys.path[:3]}...")  # Primeros 3 elementos<br>
<br>
# Información del sistema<br>
print(f"\\nSistema operativo: {platform.system()}")<br>
print(f"Nombre del equipo: {platform.node()}")<br>
print(f"Procesador: {platform.processor()}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">⚙️ Ejercicio 2: Configuración del intérprete</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora la configuración y módulos disponibles:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Módulos incorporados<br>
import sys<br>
<br>
print("📦 MÓDULOS INCORPORADOS")<br>
print("=" * 30)<br>
builtin_modules = sorted(sys.builtin_module_names)<br>
print(f"Total de módulos incorporados: {len(builtin_modules)}")<br>
print("\\nPrimeros 10 módulos:")<br>
for i, module in enumerate(builtin_modules[:10]):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{i+1:2d}. {module}")<br>
<br>
# Configuración de codificación<br>
print(f"\\n🔤 CODIFICACIÓN")<br>
print("=" * 20)<br>
print(f"Codificación por defecto: {sys.getdefaultencoding()}")<br>
print(f"Codificación del sistema: {sys.getfilesystemencoding()}")<br>
<br>
# Límites del sistema<br>
print(f"\\n📊 LÍMITES DEL SISTEMA")<br>
print("=" * 25)<br>
print(f"Recursión máxima: {sys.getrecursionlimit()}")<br>
print(f"Tamaño máximo de int: {sys.maxsize}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Verificar versión",
                description: "Usa el comando para verificar la versión de Python",
                template: "# Ejecuta este código para ver la versión de Python\nimport sys\nprint(sys.version)",
                solution: "import sys\nprint(sys.version)"
            }
        ],
        quiz: [
            {
                question: "¿Cómo se inicia el intérprete interactivo de Python?",
                options: ["python", "py", "python3", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Qué comando se usa para salir del intérprete de Python?",
                options: ["exit", "quit()", "exit()", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Cómo se ejecuta un archivo Python desde la línea de comandos?",
                options: ["python archivo.py", "run archivo.py", "exec archivo.py", "start archivo.py"],
                correct: 0
            },
            {
                question: "¿Qué son los prompts >>> y ... en el intérprete?",
                options: ["Errores de sintaxis", "Indicadores de entrada primaria y secundaria", "Comandos especiales", "Decoradores"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica la versión de Python instalada?",
                options: ["python --version", "python -V", "python --v", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué variable contiene la ruta donde está instalado Python?",
                options: ["sys.path", "sys.executable", "os.path", "python.path"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al historial de comandos en el intérprete?",
                options: ["Flechas arriba/abajo", "history()", "Ctrl+H", "No es posible"],
                correct: 0
            },
            {
                question: "¿Qué hace el comando help() en el intérprete?",
                options: ["Cierra Python", "Muestra ayuda interactiva", "Lista archivos", "Limpia pantalla"],
                correct: 1
            },
            {
                question: "¿Qué variable especial contiene el resultado de la última expresión en el intérprete?",
                options: ["_last", "_", "__result__", "result"],
                correct: 1
            },
            {
                question: "¿Cómo se ejecuta código Python de forma interactiva desde un archivo?",
                options: ["python -i archivo.py", "python -interactive archivo.py", "python archivo.py -i", "interactive archivo.py"],
                correct: 0
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">⚙️ Configuración y Templates</h4>
                <p class="theme-text-secondary mb-4">Aprende a configurar Shiny for Python y explora templates predefinidos que te ayudarán a comenzar rápidamente.</p>
                
                <div class="mb-6">
                    <a href="https://shinylive.io/py/examples/" target="_blank" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Ver Templates en Shiny Live
                    </a>
                    <p class="text-sm theme-text-secondary mt-2">Se abrirá en una nueva ventana</p>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">📋 Comandos de Instalación</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <p class="text-sm theme-text-secondary mb-3">Instalación local:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code># Instalación básica
pip install shiny

# Con dependencias adicionales
pip install shiny pandas plotly matplotlib seaborn

# Crear app desde template
shiny create --template dashboard-tips my-app

# Ejecutar en modo desarrollo
shiny run app.py --reload</code></pre>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🏗️ Estructura Básica de App</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny import App, ui, render

# UI: Define la interfaz
app_ui = ui.page_fluid(
    ui.h2("Mi Primera App Shiny"),
    ui.input_text("name", "Tu nombre:", ""),
    ui.output_text("greeting")
)

# Server: Define la lógica
def server(input, output, session):
    @output
    @render.text
    def greeting():
        return f"¡Hola, {input.name()}!"

# Crear la app
app = App(app_ui, server)</code></pre>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🚀 Express Mode</h5>
                        <p class="text-sm theme-text-secondary">Sintaxis simplificada para prototipado rápido</p>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🏛️ Core Mode</h5>
                        <p class="text-sm theme-text-secondary">Control total sobre la estructura de la app</p>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 Dashboard Template</h5>
                        <p class="text-sm theme-text-secondary">Template con sidebar, value boxes y gráficos</p>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🌐 Deployment</h5>
                        <p class="text-sm theme-text-secondary">Deploy en múltiples plataformas cloud</p>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h5 class="font-semibold theme-text-primary mb-2">💡 Templates Disponibles:</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• <strong>basic-app:</strong> Aplicación simple con inputs y outputs</li>
                        <li>• <strong>dashboard:</strong> Dashboard con sidebar y value boxes</li>
                        <li>• <strong>multi-page:</strong> Aplicación multipágina con navegación</li>
                        <li>• <strong>plotly-app:</strong> Integración con gráficos Plotly interactivos</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    "control-flow": {
        title: "4. Inputs y Outputs en Shiny",
        description: "Componentes interactivos y renderizado",
        video: "https://www.youtube.com/embed/9Os0o3wzS_I",
        additionalVideos: [
            { title: "Shiny Inputs - Complete Guide", url: "https://www.youtube.com/embed/f79MRyMsjrQ" },
            { title: "Shiny Outputs and Rendering", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
            { title: "Reactive Programming in Shiny", url: "https://www.youtube.com/embed/HgbNNgWy7P8" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Inputs y Outputs en Shiny for Python</h2>
            <p class="theme-text-secondary mb-4">Los inputs y outputs son los componentes fundamentales de cualquier aplicación Shiny. Los inputs recogen información del usuario, mientras que los outputs muestran resultados reactivos.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tipos de Inputs Principales</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📝 Inputs de Texto</h4>
                    <pre class="bg-black text-green-400 p-2 rounded text-xs"><code>ui.input_text("name", "Nombre:")
ui.input_text_area("message", "Mensaje:")
ui.input_password("pwd", "Contraseña:")</code></pre>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🔢 Inputs Numéricos</h4>
                    <pre class="bg-black text-green-400 p-2 rounded text-xs"><code>ui.input_numeric("num", "Número:", value=10)
ui.input_slider("range", "Rango:", min=0, max=100)
ui.input_slider("range2", "Doble:", min=0, max=100, value=[20, 80])</code></pre>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📋 Selección</h4>
                    <pre class="bg-black text-green-400 p-2 rounded text-xs"><code>ui.input_select("var", "Variable:", choices=["A", "B", "C"])
ui.input_radio_buttons("dist", "Distribución:", choices={"norm": "Normal", "unif": "Uniforme"})
ui.input_checkbox_group("options", "Opciones:", choices=["1", "2", "3"])</code></pre>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📅 Fecha y Hora</h4>
                    <pre class="bg-black text-green-400 p-2 rounded text-xs"><code>ui.input_date("date", "Fecha:")
ui.input_date_range("dates", "Rango:")
ui.input_switch("show_data", "Mostrar datos")</code></pre>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tipos de Outputs Principales</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📊 Visualizaciones</h4>
                    <pre class="bg-black text-green-400 p-2 rounded text-xs"><code>@render.plot
def my_plot():
    # matplotlib, seaborn
    return plt.gcf()

@render.plotly
def plotly_chart():
    # plotly interactivo
    return fig</code></pre>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">📄 Texto y Datos</h4>
                    <pre class="bg-black text-green-400 p-2 rounded text-xs"><code>@render.text
def my_text():
    return f"Hola {input.name()}"

@render.data_frame
def my_table():
    return df</code></pre>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Reactividad en Acción</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <h4 class="font-semibold theme-text-primary mb-2">Ejemplo Completo: Dashboard Interactivo</h4>
                <pre class="bg-black text-green-400 p-3 rounded text-sm"><code>from shiny.express import input, render, ui
import pandas as pd
import plotly.express as px

# Inputs
ui.input_select("dataset", "Elegir dataset:", 
               choices=["iris", "tips", "flights"])
ui.input_slider("sample_size", "Tamaño muestra:", 
               min=10, max=1000, value=100)
ui.input_switch("show_summary", "Mostrar resumen")

# Outputs reactivos
@render.data_frame
def data_table():
    data = load_dataset(input.dataset())
    return data.sample(input.sample_size())

@render.plotly
def scatter_plot():
    data = load_dataset(input.dataset())
    sample_data = data.sample(input.sample_size())
    fig = px.scatter(sample_data, 
                    x=sample_data.columns[0], 
                    y=sample_data.columns[1])
    return fig

@render.text
def summary_stats():
    if input.show_summary():
        data = load_dataset(input.dataset())
        return data.describe().to_string()
    return "Resumen desactivado"</code></pre>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">🚀 Características Avanzadas</h4>
                <ul class="text-sm theme-text-secondary space-y-2">
                    <li>• <strong>Transparent Reactivity:</strong> Shiny rastrea automáticamente dependencias</li>
                    <li>• <strong>Lazy Evaluation:</strong> Los outputs se calculan solo cuando son necesarios</li>
                    <li>• <strong>Invalidation:</strong> Actualización automática cuando cambian los inputs</li>
                    <li>• <strong>Async Support:</strong> Soporte completo para operaciones asíncronas</li>
                    <li>• <strong>Custom Components:</strong> Creación de componentes personalizados</li>
                </ul>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🔀 Control de Flujo en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina if, for, while y funciones con ejemplos prácticos y ejercicios interactivos.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🤔 Ejercicio 1: Condicionales avanzadas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Practica con if, elif y else:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Clasificador de edades<br>
def clasificar_edad(edad):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if edad < 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Edad inválida"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 13:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Niño"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 18:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adolescente"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif edad < 65:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adulto"<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Adulto mayor"<br>
<br>
# Probar diferentes edades<br>
edades = [5, 15, 25, 70, -5]<br>
for edad in edades:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Edad {edad}: {clasificar_edad(edad)}")<br>
<br>
# Calculadora de notas<br>
def calcular_nota(puntos):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if puntos >= 90:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "A"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 80:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "B"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 70:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "C"<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif puntos >= 60:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "D"<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "F"<br>
<br>
puntuaciones = [95, 87, 73, 65, 45]<br>
for puntos in puntuaciones:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{puntos} puntos = Nota {calcular_nota(puntos)}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔄 Ejercicio 2: Bucles y patrones</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea patrones y secuencias con bucles:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Patrones con bucles<br>
print("=== Patrón de estrellas ===")<br>
for i in range(1, 6):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("*" * i)<br>
<br>
print("\\n=== Tabla de multiplicar ===")<br>
numero = 7<br>
for i in range(1, 11):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{numero} x {i} = {numero * i}")<br>
<br>
print("\\n=== Números pares del 1 al 20 ===")<br>
pares = []<br>
for i in range(1, 21):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pares.append(i)<br>
print(f"Números pares: {pares}")<br>
<br>
print("\\n=== Countdown ===")<br>
for i in range(10, 0, -1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Faltan {i} segundos")<br>
print("¡Tiempo!")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎯 Ejercicio 3: Funciones prácticas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea funciones útiles para resolver problemas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Funciones útiles<br>
def es_primo(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Verifica si un número es primo"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n < 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, int(n**0.5) + 1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if n % i == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;return True<br>
<br>
def factorial(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Calcula el factorial de un número"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n <= 1:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;return n * factorial(n - 1)<br>
<br>
def fibonacci(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;"""Genera los primeros n números de Fibonacci"""<br>
&nbsp;&nbsp;&nbsp;&nbsp;if n <= 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return []<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif n == 1:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [0]<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif n == 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [0, 1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;fib = [0, 1]<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fib.append(fib[i-1] + fib[i-2])<br>
&nbsp;&nbsp;&nbsp;&nbsp;return fib<br>
<br>
# Probar las funciones<br>
print("Números primos del 1 al 20:")<br>
primos = [i for i in range(1, 21) if es_primo(i)]<br>
print(primos)<br>
<br>
print(f"\\nFactorial de 5: {factorial(5)}")<br>
print(f"Primeros 10 números de Fibonacci: {fibonacci(10)}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Número par o impar",
                description: "Escribe un programa que determine si un número es par o impar",
                template: "# Pide un número al usuario y determina si es par o impar\nnumero = int(input('Ingresa un número: '))\n# Tu código aquí",
                solution: "numero = int(input('Ingresa un número: '))\nif numero % 2 == 0:\n    print('El número es par')\nelse:\n    print('El número es impar')"
            },
            {
                title: "Tabla de multiplicar",
                description: "Crea una función que imprima la tabla de multiplicar de un número",
                template: "def tabla_multiplicar(numero):\n    # Tu código aquí\n    pass\n\n# Llama la función\ntabla_multiplicar(5)",
                solution: "def tabla_multiplicar(numero):\n    for i in range(1, 11):\n        print(f'{numero} x {i} = {numero * i}')\n\ntabla_multiplicar(5)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es el decorador para renderizar texto en Shiny?",
                options: ["@output.text", "@render.text", "@display.text", "@show.text"],
                correct: 1
            },
            {
                question: "¿Qué función crea un input de tipo slider?",
                options: ["ui.slider()", "ui.input_slider()", "ui.range()", "ui.input_range()"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al valor de un input en Shiny?",
                options: ["input[\"id\"]", "input.id()", "input.get(\"id\")", "get_input(\"id\")"],
                correct: 1
            },
            {
                question: "¿Cuál es la característica principal de la reactividad en Shiny?",
                options: ["Manual", "Automática", "Opcional", "Ninguna"],
                correct: 1
            },
            {
                question: "¿Qué tipo de input permite selección de múltiples opciones?",
                options: ["input_select", "input_radio_buttons", "input_checkbox_group", "input_switch"],
                correct: 2
            },
            {
                question: "¿Cuál es el decorador para renderizar gráficos de matplotlib?",
                options: ["@render.plot", "@render.chart", "@render.graph", "@render.figure"],
                correct: 0
            },
            {
                question: "¿Cómo se crea un input de fecha en Shiny?",
                options: ["ui.date()", "ui.input_date()", "ui.calendar()", "ui.datepicker()"],
                correct: 1
            },
            {
                question: "¿Qué permite la 'transparent reactivity' de Shiny?",
                options: ["Codigo más rápido", "Rastreo automático de dependencias", "Mejor diseño", "Más colores"],
                correct: 1
            },
            {
                question: "¿Qué input es ideal para rangos de valores?",
                options: ["input_numeric", "input_text", "input_slider con value=[min, max]", "input_range"],
                correct: 2
            },
            {
                question: "¿Cuál es la ventaja de usar @render.plotly vs @render.plot?",
                options: ["Mejor rendimiento", "Interactividad", "Más colores", "Sintaxis más simple"],
                correct: 1
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📝 Inputs Interactivos - Experimentación Práctica</h4>
                <p class="theme-text-secondary mb-4">Explora todos los tipos de inputs de Shiny y cómo crean aplicaciones reactivas. Cada input tiene características únicas que puedes aprovechar.</p>
                
                <div class="grid md:grid-cols-2 gap-4 mb-6">
                    <a href="https://shinylive.io/py/examples/#basic-inputs" target="_blank" class="block p-4 theme-bg-tertiary rounded-lg hover:shadow-lg transition-all">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <i class="fas fa-sliders-h text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-semibold theme-text-primary">Inputs Básicos</h5>
                                <p class="text-sm theme-text-secondary">Sliders, texto, números</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://shinylive.io/py/examples/#data-visualization" target="_blank" class="block p-4 theme-bg-tertiary rounded-lg hover:shadow-lg transition-all">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <i class="fas fa-chart-bar text-white"></i>
                            </div>
                            <div>
                                <h5 class="font-semibold theme-text-primary">Outputs Reactivos</h5>
                                <p class="text-sm theme-text-secondary">Gráficos, tablas, texto</p>
                            </div>
                        </div>
                    </a>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">🎯 Galeria de Inputs - Laboratorio Completo</h5>
                        <pre class="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto mb-3"><code>from shiny.express import input, render, ui

# === INPUTS DE TEXTO ===
ui.h3("📝 Inputs de Texto")
ui.input_text("nombre", "Nombre completo:", "")
ui.input_text_area("descripcion", "Descripción:", "")
ui.input_password("pass", "Contraseña:", "")

# === INPUTS NUMÉRICOS ===
ui.h3("🔢 Inputs Numéricos")
ui.input_numeric("edad", "Edad:", value=25, min=0, max=120)
ui.input_slider("temp", "Temperatura:", min=-10, max=50, value=20)
ui.input_slider("rango", "Rango de valores:", 
               min=0, max=100, value=[25, 75])

# === SELECCIÓN ===
ui.h3("📋 Selección de Opciones")
ui.input_select("pais", "País:", 
               choices=["España", "México", "Argentina"])
ui.input_radio_buttons("genero", "Género:", 
                      choices={"M": "Masculino", "F": "Femenino"})
ui.input_checkbox_group("hobbies", "Hobbies:", 
                       choices=["Leer", "Deportes", "Música"])

# === FECHA Y HORA ===
ui.h3("📅 Fecha y Tiempo")
ui.input_date("nacimiento", "Fecha de nacimiento:")
ui.input_date_range("periodo", "Período de análisis:")
ui.input_switch("activo", "Usuario activo", value=True)

# === OUTPUT REACTIVO ===
@render.text
def resumen_usuario():
    return f"""Resumen del Usuario:
    Nombre: {input.nombre()}
    Edad: {input.edad()}
    País: {input.pais()}
    Hobbies: {', '.join(input.hobbies())}
    Usuario activo: {'Sí' if input.activo() else 'No'}
    Rango seleccionado: {input.rango()[0]} - {input.rango()[1]}
    Descripción: {input.descripcion()[:100]}...
    """</code></pre>
                        <div class="text-xs theme-text-secondary">
                            <i class="fas fa-lightbulb mr-1"></i>Observa cómo todos los inputs se conectan reactivamente al output
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-3">📊 Dashboard con Múltiples Outputs</h5>
                        <pre class="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto mb-3"><code>from shiny.express import input, render, ui
import pandas as pd
import plotly.express as px
import numpy as np

# Controles del dashboard
ui.input_slider("n_points", "Número de puntos:", min=50, max=500, value=200)
ui.input_select("chart_type", "Tipo de gráfico:", 
               choices=["scatter", "histogram", "box"])
ui.input_radio_buttons("color_scheme", "Esquema de color:", 
                      choices={"viridis": "Viridis", "plasma": "Plasma", "cividis": "Cividis"})

with ui.layout_columns():
    # Tabla de datos
    @render.data_frame
    def data_table():
        n = input.n_points()
        data = pd.DataFrame({
            'x': np.random.randn(n),
            'y': np.random.randn(n),
            'category': np.random.choice(['A', 'B', 'C'], n)
        })
        return render.DataGrid(data, height="300px")
    
    # Gráfico interactivo
    @render.plotly
    def interactive_plot():
        n = input.n_points()
        data = pd.DataFrame({
            'x': np.random.randn(n),
            'y': np.random.randn(n),
            'category': np.random.choice(['A', 'B', 'C'], n)
        })
        
        if input.chart_type() == "scatter":
            fig = px.scatter(data, x='x', y='y', color='category',
                           color_discrete_sequence=px.colors.qualitative.Set1)
        elif input.chart_type() == "histogram":
            fig = px.histogram(data, x='x', color='category',
                             color_discrete_sequence=px.colors.qualitative.Set1)
        else:  # box
            fig = px.box(data, x='category', y='y',
                        color_discrete_sequence=px.colors.qualitative.Set1)
        
        fig.update_layout(coloraxis_colorbar_title="Valor")
        return fig

# Resumen estadístico
@render.text
def stats_summary():
    n = input.n_points()
    return f"""Estadísticas del Dataset:
    • Total de puntos: {n}
    • Tipo de visualización: {input.chart_type().title()}
    • Esquema de color: {input.color_scheme()}
    • Actualización: Automática cuando cambias los controles
    """</code></pre>
                        <div class="text-xs theme-text-secondary">
                            <i class="fas fa-magic mr-1"></i>Dashboard completo que se actualiza reactivamente
                        </div>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg mt-6">
                    <h5 class="font-semibold theme-text-primary mb-2">🛠️ Tips para Inputs y Outputs:</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• <strong>IDs únicos:</strong> Cada input necesita un ID único para ser referenciado</li>
                        <li>• <strong>Valores por defecto:</strong> Siempre proporciona valores iniciales lógicos</li>
                        <li>• <strong>Validación:</strong> Usa min/max para inputs numéricos</li>
                        <li>• <strong>Reactividad automática:</strong> Los outputs se actualizan cuando cambian sus inputs</li>
                        <li>• <strong>Performance:</strong> Shiny optimiza automáticamente las actualizaciones</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    "data-structures": {
        title: "5. Estructuras de Datos",
        description: "Listas, tuplas, diccionarios",
        video: "https://www.youtube.com/embed/R-HLU9Fl5ug",
        additionalVideos: [
            { title: "Listas en Python", url: "https://www.youtube.com/embed/ohCDWZgNIU0" },
            { title: "Diccionarios en Python", url: "https://www.youtube.com/embed/XCcpzWs-CI4" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Estructuras de Datos</h2>
            <p class="theme-text-secondary mb-4">Python incluye varias estructuras de datos built-in muy útiles: listas, tuplas, diccionarios y conjuntos.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Listas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    frutas = ['naranja', 'manzana', 'pera', 'banana', 'kiwi']<br>
                    frutas.append('uva')  # Agregar elemento<br>
                    frutas.insert(1, 'fresa')  # Insertar en posición<br>
                    frutas.remove('pera')  # Eliminar elemento<br>
                    print(frutas[0])  # Primer elemento<br>
                    print(frutas[-1])  # Último elemento
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Métodos de Listas</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Agregar elementos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>append() - Al final</li>
                        <li>insert() - En posición</li>
                        <li>extend() - Múltiples elementos</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Eliminar elementos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>remove() - Por valor</li>
                        <li>pop() - Por índice</li>
                        <li>clear() - Todos</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tuplas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    t = 12345, 54321, 'hola!'<br>
                    print(t[0])  # 12345<br>
                    print(t)     # (12345, 54321, 'hola!')<br><br>
                    
                    # Las tuplas son inmutables<br>
                    x, y, z = t  # Desempaquetado
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Diccionarios</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    tel = {'jack': 4098, 'sape': 4139}<br>
                    tel['guido'] = 4127<br>
                    print(tel)  # {'jack': 4098, 'sape': 4139, 'guido': 4127}<br>
                    print(tel['jack'])  # 4098<br>
                    del tel['sape']<br>
                    print(list(tel.keys()))  # ['jack', 'guido']
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Conjuntos (Sets)</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    cesta = {'manzana', 'naranja', 'manzana', 'pera', 'naranja', 'banana'}<br>
                    print(cesta)  # {'naranja', 'banana', 'pera', 'manzana'}<br><br>
                    
                    a = set('abracadabra')<br>
                    b = set('alacazam')<br>
                    print(a - b)  # Diferencia<br>
                    print(a | b)  # Unión
                </code>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Estructuras de Datos en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina listas, tuplas, diccionarios y conjuntos con ejercicios prácticos inspirados en casos reales.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 1: Sistema de gestión de estudiantes</h5>
                        <p class="text-sm theme-text-secondary mb-3">Crea un sistema para gestionar información de estudiantes:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Sistema de gestión de estudiantes<br>
estudiantes = []<br>
<br>
# Agregar estudiantes<br>
estudiantes.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;"nombre": "Ana García",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"edad": 20,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"carrera": "Ingeniería",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"calificaciones": [85, 92, 78, 88, 90]<br>
})<br>
<br>
estudiantes.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;"nombre": "Carlos López",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"edad": 19,<br>
&nbsp;&nbsp;&nbsp;&nbsp;"carrera": "Medicina",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"calificaciones": [92, 87, 95, 89, 91]<br>
})<br>
<br>
# Funciones de análisis<br>
def calcular_promedio(calificaciones):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return sum(calificaciones) / len(calificaciones)<br>
<br>
def obtener_mejor_estudiante(estudiantes):<br>
&nbsp;&nbsp;&nbsp;&nbsp;mejor = None<br>
&nbsp;&nbsp;&nbsp;&nbsp;mejor_promedio = 0<br>
&nbsp;&nbsp;&nbsp;&nbsp;for estudiante in estudiantes:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;promedio = calcular_promedio(estudiante["calificaciones"])<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if promedio > mejor_promedio:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mejor_promedio = promedio<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mejor = estudiante<br>
&nbsp;&nbsp;&nbsp;&nbsp;return mejor, mejor_promedio<br>
<br>
# Mostrar resultados<br>
for estudiante in estudiantes:<br>
&nbsp;&nbsp;&nbsp;&nbsp;promedio = calcular_promedio(estudiante["calificaciones"])<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Estudiante: {estudiante['nombre']}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Promedio: {promedio:.2f}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("-" * 30)<br>
<br>
mejor, promedio = obtener_mejor_estudiante(estudiantes)<br>
print(f"\\nMejor estudiante: {mejor['nombre']} ({promedio:.2f})")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🛒 Ejercicio 2: Carrito de compras</h5>
                        <p class="text-sm theme-text-secondary mb-3">Simula un carrito de compras con productos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Carrito de compras<br>
productos = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;"laptop": {"precio": 1200, "stock": 5},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"mouse": {"precio": 25, "stock": 20},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"teclado": {"precio": 80, "stock": 15},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"monitor": {"precio": 300, "stock": 8},<br>
&nbsp;&nbsp;&nbsp;&nbsp;"auriculares": {"precio": 150, "stock": 12}<br>
}<br>
<br>
carrito = []<br>
<br>
def agregar_al_carrito(producto, cantidad):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if producto in productos:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if productos[producto]["stock"] >= cantidad:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;carrito.append({<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"producto": producto,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cantidad": cantidad,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"precio_unitario": productos[producto]["precio"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;productos[producto]["stock"] -= cantidad<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"✅ {cantidad} {producto}(s) agregado(s) al carrito")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"❌ Stock insuficiente para {producto}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"❌ Producto {producto} no encontrado")<br>
<br>
def calcular_total():<br>
&nbsp;&nbsp;&nbsp;&nbsp;total = sum(item["cantidad"] * item["precio_unitario"] for item in carrito)<br>
&nbsp;&nbsp;&nbsp;&nbsp;return total<br>
<br>
def mostrar_carrito():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("\\n🛒 CARRITO DE COMPRAS")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("=" * 40)<br>
&nbsp;&nbsp;&nbsp;&nbsp;for item in carrito:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = item["cantidad"] * item["precio_unitario"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{item['producto']} x{item['cantidad']} = \${subtotal}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"\\nTOTAL: \${calcular_total()}")<br>
<br>
# Simular compras<br>
agregar_al_carrito("laptop", 1)<br>
agregar_al_carrito("mouse", 2)<br>
agregar_al_carrito("teclado", 1)<br>
agregar_al_carrito("laptop", 10)  # Debe fallar por stock<br>
<br>
mostrar_carrito()</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📈 Ejercicio 3: Análisis de datos con conjuntos</h5>
                        <p class="text-sm theme-text-secondary mb-3">Analiza datos usando conjuntos y operaciones:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Análisis de preferencias de usuarios<br>
usuarios_python = {"Ana", "Carlos", "Luis", "María", "Pedro", "Sofia"}<br>
usuarios_javascript = {"Carlos", "Elena", "Luis", "Roberto", "Sofia", "Diego"}<br>
usuarios_java = {"Ana", "Elena", "Miguel", "Pedro", "Roberto", "Carlos"}<br>
<br>
print("👥 ANÁLISIS DE PREFERENCIAS DE LENGUAJES")<br>
print("=" * 50)<br>
<br>
# Usuarios que programan en Python<br>
print(f"Python: {len(usuarios_python)} usuarios")<br>
print(f"Lista: {sorted(usuarios_python)}")<br>
<br>
# Usuarios que programan en JavaScript<br>
print(f"\\nJavaScript: {len(usuarios_javascript)} usuarios")<br>
print(f"Lista: {sorted(usuarios_javascript)}")<br>
<br>
# Usuarios que programan en Java<br>
print(f"\\nJava: {len(usuarios_java)} usuarios")<br>
print(f"Lista: {sorted(usuarios_java)}")<br>
<br>
# Operaciones con conjuntos<br>
print("\\n🔍 ANÁLISIS CRUZADO")<br>
print("=" * 30)<br>
<br>
# Usuarios que programan en Python Y JavaScript<br>
python_js = usuarios_python & usuarios_javascript<br>
print(f"Python ∩ JavaScript: {sorted(python_js)}")<br>
<br>
# Usuarios que programan en los 3 lenguajes<br>
todos_lenguajes = usuarios_python & usuarios_javascript & usuarios_java<br>
print(f"Los 3 lenguajes: {sorted(todos_lenguajes)}")<br>
<br>
# Usuarios que solo programan en Python<br>
solo_python = usuarios_python - usuarios_javascript - usuarios_java<br>
print(f"Solo Python: {sorted(solo_python)}")<br>
<br>
# Total de usuarios únicos<br>
todos_usuarios = usuarios_python | usuarios_javascript | usuarios_java<br>
print(f"\\nTotal usuarios únicos: {len(todos_usuarios)}")<br>
print(f"Lista completa: {sorted(todos_usuarios)}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Operaciones con listas",
                description: "Crea una lista de números y realiza operaciones básicas",
                template: "# Crea una lista con los números del 1 al 10\nnumeros = []\n# Agrega los números\n# Imprime la suma de todos los números",
                solution: "numeros = list(range(1, 11))\nprint('Lista:', numeros)\nprint('Suma:', sum(numeros))\nprint('Máximo:', max(numeros))\nprint('Mínimo:', min(numeros))"
            },
            {
                title: "Diccionario de estudiantes",
                description: "Crea un diccionario para almacenar información de estudiantes",
                template: "# Crea un diccionario con nombre, edad y calificaciones\nestudiante = {}\n# Tu código aquí",
                solution: "estudiante = {\n    'nombre': 'Juan',\n    'edad': 20,\n    'calificaciones': [85, 90, 78, 92]\n}\nprint('Estudiante:', estudiante['nombre'])\nprint('Promedio:', sum(estudiante['calificaciones']) / len(estudiante['calificaciones']))"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la diferencia principal entre listas y tuplas?",
                options: ["Las listas son más rápidas", "Las tuplas son inmutables", "Las listas no pueden contener números", "No hay diferencia"],
                correct: 1
            },
            {
                question: "¿Cómo accedes al valor de una clave en un diccionario?",
                options: ["dict.get(key)", "dict[key]", "dict(key)", "Todas son correctas"],
                correct: 3
            },
            {
                question: "¿Cuál es la sintaxis correcta para crear un conjunto (set)?",
                options: ["set = []", "set = {}", "set = {1, 2, 3}", "set = (1, 2, 3)"],
                correct: 2
            },
            {
                question: "¿Qué método se usa para eliminar un elemento de una lista por valor?",
                options: ["delete()", "remove()", "erase()", "pop()"],
                correct: 1
            },
            {
                question: "¿Cómo se agrega un elemento a un conjunto?",
                options: ["set.append()", "set.add()", "set.insert()", "set.push()"],
                correct: 1
            },
            {
                question: "¿Cuál es la principal característica de los conjuntos (sets)?",
                options: ["Permiten duplicados", "No permiten duplicados", "Son ordenados", "Son inmutables"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al último elemento de una lista?",
                options: ["lista[last]", "lista[-1]", "lista[end]", "lista.last()"],
                correct: 1
            },
            {
                question: "¿Qué devuelve dict.keys()?",
                options: ["Una lista", "Un conjunto", "Una vista de las claves", "Un string"],
                correct: 2
            },
            {
                question: "¿Cómo se concatenan dos listas?",
                options: ["lista1 + lista2", "lista1.concat(lista2)", "lista1.join(lista2)", "lista1.merge(lista2)"],
                correct: 0
            },
            {
                question: "¿Cuál es la forma correcta de crear un diccionario vacío?",
                options: ["dict = []", "dict = {}", "dict = ()", "dict = set()"],
                correct: 1
            }
        ]
    },
    
    basics: {
        title: "3. Fundamentos de Shiny: UI y Server",
        description: "Estructura básica de una aplicación Shiny",
        video: "https://www.youtube.com/embed/dAkbbEnFgHs",
        additionalVideos: [
            { title: "Shiny UI Fundamentals Tutorial", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Server Functions in Shiny Python", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Input and Output Components", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Building Your First Shiny App", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Usando Python como Calculadora</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Números</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    >>> 2 + 2<br>
                    4<br>
                    >>> 50 - 5*6<br>
                    20<br>
                    >>> 8 / 5<br>
                    1.6
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Operadores Aritméticos</h3>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Básicos</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>+ (suma)</li>
                        <li>- (resta)</li>
                        <li>* (multiplicación)</li>
                        <li>/ (división)</li>
                    </ul>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">Avanzados</h4>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>** (potencia)</li>
                        <li>// (división entera)</li>
                        <li>% (módulo)</li>
                    </ul>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Strings (Cadenas)</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    >>> 'hola mundo'<br>
                    'hola mundo'<br>
                    >>> "Python es genial"<br>
                    'Python es genial'<br>
                    >>> 'Hola' + ' ' + 'mundo'<br>
                    'Hola mundo'
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Listas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    >>> cuadrados = [1, 4, 9, 16, 25]<br>
                    >>> cuadrados<br>
                    [1, 4, 9, 16, 25]<br>
                    >>> cuadrados[0]<br>
                    1<br>
                    >>> cuadrados[-1]<br>
                    25
                </code>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🧮 Práctica de Fundamentos en Google Colab</h4>
                <p class="theme-text-secondary mb-4">Domina los conceptos básicos de Python: números, strings y listas con ejercicios prácticos.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Abrir Google Colab
                    </button>
                </div>
                
                <div class="space-y-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔢 Ejercicio 1: Operaciones matemáticas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Explora todos los operadores matemáticos:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Operadores matemáticos en Python<br>
print("=== Operadores Básicos ===")<br>
print(f"Suma: 25 + 15 = {25 + 15}")<br>
print(f"Resta: 50 - 30 = {50 - 30}")<br>
print(f"Multiplicación: 7 * 8 = {7 * 8}")<br>
print(f"División: 84 / 4 = {84 / 4}")<br>
print(f"División entera: 17 // 5 = {17 // 5}")<br>
print(f"Módulo: 17 % 5 = {17 % 5}")<br>
print(f"Potencia: 3 ** 4 = {3 ** 4}")<br><br>
# Orden de operaciones<br>
resultado = 2 + 3 * 4<br>
print(f"2 + 3 * 4 = {resultado}")<br>
resultado_con_parentesis = (2 + 3) * 4<br>
print(f"(2 + 3) * 4 = {resultado_con_parentesis}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Ejercicio 2: Manipulación de strings</h5>
                        <p class="text-sm theme-text-secondary mb-3">Aprende a trabajar con cadenas de texto:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Trabajando con strings<br>
nombre = "Python"<br>
apellido = "Programming"<br>
<br>
# Concatenación<br>
nombre_completo = nombre + " " + apellido<br>
print(f"Nombre completo: {nombre_completo}")<br>
<br>
# Repetición<br>
print("¡" * 5)<br>
<br>
# Métodos de string<br>
texto = "Hola mundo python"<br>
print(f"Mayúsculas: {texto.upper()}")<br>
print(f"Minúsculas: {texto.lower()}")<br>
print(f"Título: {texto.title()}")<br>
print(f"Longitud: {len(texto)}")<br>
print(f"Reemplazar: {texto.replace('mundo', 'universo')}")</code>
                        </div>
                    </div>
                    
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📋 Ejercicio 3: Listas básicas</h5>
                        <p class="text-sm theme-text-secondary mb-3">Descubre el poder de las listas:</p>
                        <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3">
                            <code># Trabajando con listas<br>
# Crear listas<br>
numeros = [1, 2, 3, 4, 5]<br>
frutas = ["manzana", "banana", "naranja"]<br>
mixta = [1, "Python", 3.14, True]<br>
<br>
print(f"Números: {numeros}")<br>
print(f"Frutas: {frutas}")<br>
print(f"Lista mixta: {mixta}")<br>
<br>
# Acceder a elementos<br>
print(f"Primer número: {numeros[0]}")<br>
print(f"Última fruta: {frutas[-1]}")<br>
<br>
# Slicing<br>
print(f"Primeros 3 números: {numeros[:3]}")<br>
print(f"Últimos 2 números: {numeros[-2:]}")<br>
<br>
# Agregar elementos<br>
frutas.append("uva")<br>
print(f"Frutas después de agregar: {frutas}")</code>
                        </div>
                    </div>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Calculadora básica",
                description: "Realiza operaciones aritméticas básicas",
                template: "# Calcula 15 + 30 * 2\n# Calcula 100 / 4\n# Calcula 2 ** 8\n",
                solution: "print(15 + 30 * 2)\nprint(100 / 4)\nprint(2 ** 8)"
            },
            {
                title: "Trabajando con strings",
                description: "Crea y manipula cadenas de texto",
                template: "# Crea una variable con tu nombre\n# Crea otra con tu apellido\n# Únelas con un espacio\n",
                solution: "nombre = 'Juan'\napellido = 'Pérez'\ncompleto = nombre + ' ' + apellido\nprint(completo)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es el resultado de 2 ** 3?",
                options: ["6", "8", "9", "5"],
                correct: 1
            },
            {
                question: "¿Cómo se accede al primer elemento de una lista?",
                options: ["lista[1]", "lista[0]", "lista.first()", "lista.get(0)"],
                correct: 1
            },
            {
                question: "¿Cuál es el operador para la división entera en Python?",
                options: ["/", "//", "%", "div"],
                correct: 1
            },
            {
                question: "¿Qué resultado devuelve el operador % en Python?",
                options: ["División", "Multiplicación", "Módulo (resto)", "Potencia"],
                correct: 2
            },
            {
                question: "¿Cómo se define una cadena de texto multilínea en Python?",
                options: ["'texto'", "\"texto\"", "'''texto'''", "Todas las anteriores son correctas para multilínea"],
                correct: 2
            },
            {
                question: "¿Cuál es el método correcto para agregar un elemento al final de una lista?",
                options: ["lista.add()", "lista.append()", "lista.insert()", "lista.push()"],
                correct: 1
            },
            {
                question: "¿Qué devuelve len([1, 2, 3, 4])?",
                options: ["3", "4", "5", "Error"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica el tipo de una variable en Python?",
                options: ["typeof(variable)", "type(variable)", "variable.type()", "gettype(variable)"],
                correct: 1
            },
            {
                question: "¿Cuál es la forma correcta de crear una lista vacía?",
                options: ["lista = []", "lista = list()", "lista = new List()", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué operador se usa para verificar si un elemento está en una lista?",
                options: ["is", "in", "contains", "has"],
                correct: 1
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🏗️ Fundamentos: UI y Server</h4>
                <p class="theme-text-secondary mb-4">Aprende los conceptos fundamentales de Shiny: cómo crear interfaces de usuario (UI) y lógica del servidor interactiva.</p>
                
                <div class="mb-6">
                    <a href="https://shinylive.io/py/examples/" target="_blank" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Ejemplos UI/Server
                    </a>
                    <p class="text-sm theme-text-secondary mt-2">Se abrirá en una nueva ventana</p>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🎯 Ejemplo Interactivo Básico</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <p class="text-sm theme-text-secondary mb-3">App con slider y gráfico:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import matplotlib.pyplot as plt
import numpy as np

ui.input_slider("n", "Número de puntos:", min=10, max=100, value=50)

@render.plot
def histogram():
    np.random.seed(42)
    data = np.random.normal(0, 1, input.n())
    
    fig, ax = plt.subplots()
    ax.hist(data, bins=20, alpha=0.7)
    ax.set_title(f"Histograma con {input.n()} puntos")
    return fig</code></pre>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">📊 Dashboard con Múltiples Inputs</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import pandas as pd
import plotly.express as px

# Datos de ejemplo
tips = px.data.tips()

ui.input_select("column", "Columna:", choices=["total_bill", "tip", "size"])
ui.input_checkbox("log_scale", "Escala logarítmica", value=False)

@render.plot
def scatter_plot():
    fig = px.scatter(tips, x="total_bill", y=input.column())
    if input.log_scale():
        fig.update_yaxes(type="log")
    return fig</code></pre>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎛️ Inputs Comunes</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>input_slider()</code> - Controles deslizantes</li>
                            <li>• <code>input_select()</code> - Menús desplegables</li>
                            <li>• <code>input_checkbox()</code> - Casillas de verificación</li>
                            <li>• <code>input_text()</code> - Campos de texto</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 Outputs Disponibles</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>@render.plot</code> - Gráficos (matplotlib, plotly)</li>
                            <li>• <code>@render.text</code> - Texto dinámico</li>
                            <li>• <code>@render.table</code> - Tablas de datos</li>
                            <li>• <code>@render.ui</code> - UI dinámico</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">⚡ Reactividad Automática</h5>
                        <p class="text-sm theme-text-secondary">Shiny detecta automáticamente qué inputs afectan a cada output</p>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔄 Dos Modos</h5>
                        <p class="text-sm theme-text-secondary"><strong>Express:</strong> Sintaxis simple | <strong>Core:</strong> Control avanzado</p>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h5 class="font-semibold theme-text-primary mb-2">💡 Casos de Uso UI/Server:</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• <strong>Explorador de Datos:</strong> Filtros interactivos para datasets</li>
                        <li>• <strong>Calculadoras:</strong> Inputs numéricos con resultados en tiempo real</li>
                        <li>• <strong>Visualizadores:</strong> Gráficos que cambian según parámetros</li>
                        <li>• <strong>Dashboards:</strong> Múltiples widgets conectados reactivamente</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    modules: {
        title: "6. Componentes de UI en Shiny",
        description: "Inputs, outputs y layouts",
        video: "https://www.youtube.com/embed/VtchVpoSdoQ",
        additionalVideos: [
            { title: "Shiny UI Components Deep Dive", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Layout Systems in Shiny", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Custom Input Components", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Advanced UI Patterns", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Módulos en Python</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Qué son los módulos?</h3>
            <p class="theme-text-secondary mb-4">Un módulo es un archivo que contiene código Python. Permite organizar el código en archivos separados y reutilizar funciones y clases.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Importar módulos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import math<br>
                    print(math.pi)<br>
                    print(math.sqrt(16))<br><br>
                    # Importar funciones específicas<br>
                    from math import pi, sqrt<br>
                    print(pi)<br>
                    print(sqrt(25))<br><br>
                    # Importar con alias<br>
                    import math as m<br>
                    print(m.cos(0))
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear tu propio módulo</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # archivo: mi_modulo.py<br>
                    def saludar(nombre):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return f"¡Hola {nombre}!"<br><br>
                    PI = 3.14159<br><br>
                    # En otro archivo:<br>
                    import mi_modulo<br>
                    print(mi_modulo.saludar("Ana"))<br>
                    print(mi_modulo.PI)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos útiles</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">math</h4>
                    <p class="text-sm theme-text-secondary">Funciones matemáticas</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">random</h4>
                    <p class="text-sm theme-text-secondary">Números aleatorios</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">datetime</h4>
                    <p class="text-sm theme-text-secondary">Fechas y horarios</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">os</h4>
                    <p class="text-sm theme-text-secondary">Sistema operativo</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Usando math",
                description: "Importa el módulo math y usa sus funciones",
                template: "import math\n\n# Calcula la raíz cuadrada de 144\n# Calcula el seno de pi/2\n# Muestra el valor de e\n",
                solution: "import math\n\nprint(math.sqrt(144))\nprint(math.sin(math.pi/2))\nprint(math.e)"
            },
            {
                title: "Números aleatorios",
                description: "Genera números aleatorios usando random",
                template: "import random\n\n# Genera un número aleatorio entre 1 y 100\n# Elige un elemento aleatorio de una lista\n",
                solution: "import random\n\nprint(random.randint(1, 100))\nlista = ['a', 'b', 'c', 'd']\nprint(random.choice(lista))"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la forma correcta de importar solo la función sqrt del módulo math?",
                options: ["import math.sqrt", "from math import sqrt", "import sqrt from math", "math.import(sqrt)"],
                correct: 1
            },
            {
                question: "¿Cómo se importa un módulo con un alias?",
                options: ["import math as m", "import math alias m", "from math import as m", "import m from math"],
                correct: 0
            },
            {
                question: "¿Qué variable contiene el nombre del módulo actual?",
                options: ["__module__", "__name__", "__file__", "__self__"],
                correct: 1
            },
            {
                question: "¿Cómo se importan todas las funciones de un módulo?",
                options: ["import *", "from módulo import *", "import módulo.*", "from * import módulo"],
                correct: 1
            },
            {
                question: "¿Dónde busca Python los módulos para importar?",
                options: ["En sys.path", "En os.path", "En PYTHONPATH solamente", "Solo en el directorio actual"],
                correct: 0
            },
            {
                question: "¿Cuál es la diferencia entre un módulo y un paquete?",
                options: ["No hay diferencia", "Un paquete contiene múltiples módulos", "Un módulo es más grande", "Un paquete es solo para librerías"],
                correct: 1
            },
            {
                question: "¿Qué archivo indica que un directorio es un paquete Python?",
                options: ["__init__.py", "__package__.py", "package.py", "__main__.py"],
                correct: 0
            },
            {
                question: "¿Cómo se ejecuta un módulo como script?",
                options: ["python -m módulo", "python módulo.py", "run módulo", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué sucede cuando Python importa un módulo por primera vez?",
                options: ["Solo se lee", "Se ejecuta todo el código del módulo", "Solo se cargan las funciones", "Se compila únicamente"],
                correct: 1
            },
            {
                question: "¿Cómo se evita que cierto código se ejecute al importar un módulo?",
                options: ["Usando if __main__:", "Usando if __name__ == '__main__':", "Usando if import:", "No es posible"],
                correct: 1
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🎛️ Componentes de UI Avanzados</h4>
                <p class="theme-text-secondary mb-4">Explora la amplia gama de componentes de interfaz disponibles en Shiny for Python y aprende a crear layouts profesionales.</p>
                
                <div class="mb-6">
                    <a href="https://shinylive.io/py/examples/" target="_blank" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Galería de Componentes
                    </a>
                    <p class="text-sm theme-text-secondary mt-2">Se abrirá en una nueva ventana</p>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🏗️ Layout con Sidebar y Cards</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <p class="text-sm theme-text-secondary mb-3">Layout profesional con múltiples componentes:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import plotly.express as px

# Layout con sidebar
with ui.sidebar():
    ui.input_select("dataset", "Dataset:", 
                   choices=["iris", "tips", "flights"])
    ui.input_numeric("bins", "Bins:", value=30, min=5, max=100)
    ui.input_checkbox_group("colors", "Colores:",
                           choices=["red", "blue", "green"])

# Área principal con cards
with ui.layout_columns():
    with ui.card():
        ui.card_header("Histograma Interactivo")
        @render.plot
        def histogram():
            data = getattr(px.data, input.dataset())
            return px.histogram(data, bins=input.bins())
    
    with ui.card():
        ui.card_header("Estadísticas")
        @render.text
        def stats():
            return f"Dataset: {input.dataset()}, Bins: {input.bins()}"</code></pre>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🎮 Inputs Interactivos Avanzados</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import pandas as pd

# Inputs avanzados
ui.input_date_range("dates", "Rango de fechas:")
ui.input_slider("range", "Rango numérico:", 
               min=0, max=100, value=[20, 80])
ui.input_radio_buttons("chart_type", "Tipo de gráfico:",
                      choices={"scatter": "Dispersión", 
                              "line": "Línea", 
                              "bar": "Barras"})
ui.input_file("upload", "Subir archivo CSV:",
             accept=[".csv"], multiple=False)

@render.table
def data_preview():
    if input.upload() is not None:
        return pd.read_csv(input.upload()[0]["datapath"]).head()
    return pd.DataFrame({"Ejemplo": ["Sube un archivo CSV"]})</code></pre>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📝 Input Components</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>input_slider()</code> - Controles deslizantes</li>
                            <li>• <code>input_date_range()</code> - Rangos de fechas</li>
                            <li>• <code>input_file()</code> - Subida de archivos</li>
                            <li>• <code>input_radio_buttons()</code> - Botones de radio</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 Output Avanzados</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>@render.data_frame</code> - Tablas interactivas</li>
                            <li>• <code>@render.download</code> - Descarga de archivos</li>
                            <li>• <code>@render.image</code> - Imágenes dinámicas</li>
                            <li>• Plotly, Bokeh, Altair integration</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📐 Layout Systems</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>ui.sidebar()</code> - Barra lateral</li>
                            <li>• <code>ui.layout_columns()</code> - Columnas</li>
                            <li>• <code>ui.card()</code> - Tarjetas contenedoras</li>
                            <li>• <code>ui.navset_tab()</code> - Pestañas</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎨 Personalización</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• Temas Bootstrap personalizados</li>
                            <li>• CSS inline y archivos externos</li>
                            <li>• JavaScript personalizado</li>
                            <li>• Componentes HTML customizados</li>
                        </ul>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h5 class="font-semibold theme-text-primary mb-2">💡 Ejemplos de Apps Reales:</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• <strong>Dashboard Financiero:</strong> Múltiples gráficos con filtros temporales</li>
                        <li>• <strong>Explorador de Datos:</strong> Upload CSV, filtros dinámicos, download de resultados</li>
                        <li>• <strong>Simulador Científico:</strong> Inputs de parámetros, visualización en tiempo real</li>
                        <li>• <strong>App Geoespacial:</strong> Mapas interactivos con controles de capa</li>
                    </ul>
                </div>
            </div>
        `
    },
    
    io: {
        title: "7. Reactividad en Shiny",
        description: "Programación reactiva y estados",
        video: "https://www.youtube.com/embed/9uKhJg_l5jU",
        additionalVideos: [
            { title: "Understanding Shiny Reactivity", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Reactive Values and Effects", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Event Handling in Shiny", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Advanced Reactive Patterns", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Entrada y Salida</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Formateo de cadenas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # f-strings (Python 3.6+)<br>
                    nombre = "Ana"<br>
                    edad = 25<br>
                    print(f"Hola, soy {nombre} y tengo {edad} años")<br><br>
                    # Método format()<br>
                    print("Hola, soy {} y tengo {} años".format(nombre, edad))<br><br>
                    # Formateo con nombres<br>
                    print("Hola, soy {n} y tengo {e} años".format(n=nombre, e=edad))
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Leer archivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Leer archivo completo<br>
                    with open('archivo.txt', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;contenido = f.read()<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(contenido)<br><br>
                    # Leer línea por línea<br>
                    with open('archivo.txt', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;for linea in f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(linea.strip())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Escribir archivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Escribir texto<br>
                    with open('salida.txt', 'w') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Hola mundo\\n")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Segunda línea\\n")<br><br>
                    # Agregar al final<br>
                    with open('salida.txt', 'a') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;f.write("Línea adicional\\n")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Trabajar con JSON</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import json<br><br>
                    # Escribir JSON<br>
                    datos = {'nombre': 'Juan', 'edad': 30}<br>
                    with open('datos.json', 'w') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;json.dump(datos, f)<br><br>
                    # Leer JSON<br>
                    with open('datos.json', 'r') as f:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;datos = json.load(f)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(datos)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Formateo de strings",
                description: "Practica diferentes formas de formatear cadenas",
                template: "nombre = 'María'\nedad = 28\nprofesion = 'Doctora'\n\n# Usa f-strings para crear una oración\n# Usa .format() para lo mismo\n",
                solution: "nombre = 'María'\nedad = 28\nprofesion = 'Doctora'\n\nprint(f'{nombre} tiene {edad} años y es {profesion}')\nprint('{} tiene {} años y es {}'.format(nombre, edad, profesion))"
            },
            {
                title: "Simulación de archivos",
                description: "Simula el trabajo con archivos usando strings",
                template: "# Simula escribir y leer un archivo\ncontenido = \"Esta es una línea\\nEsta es otra línea\\n\"\n\n# Divide el contenido en líneas y procesalo\n",
                solution: "contenido = \"Esta es una línea\\nEsta es otra línea\\n\"\nlineas = contenido.split('\\n')\nfor linea in lineas:\n    if linea:\n        print(f'Procesando: {linea}')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja de usar 'with' al abrir archivos?",
                options: ["Es más rápido", "Se cierra automáticamente", "Usa menos memoria", "Es más moderno"],
                correct: 1
            },
            {
                question: "¿Cuál es el modo correcto para abrir un archivo solo para lectura?",
                options: ["'r'", "'read'", "'rb'", "'open'"],
                correct: 0
            },
            {
                question: "¿Qué método se usa para leer todo el contenido de un archivo?",
                options: ["read()", "readall()", "getall()", "content()"],
                correct: 0
            },
            {
                question: "¿Cómo se lee un archivo línea por línea?",
                options: ["for line in file:", "file.readlines()", "file.readline()", "Todas las anteriores"],
                correct: 3
            },
            {
                question: "¿Qué modo se usa para escribir en un archivo (sobrescribir)?",
                options: ["'w'", "'write'", "'a'", "'overwrite'"],
                correct: 0
            },
            {
                question: "¿Cuál es la diferencia entre 'w' y 'a' al abrir archivos?",
                options: ["No hay diferencia", "'w' sobrescribe, 'a' añade al final", "'a' es más rápido", "'w' es para texto, 'a' para binario"],
                correct: 1
            },
            {
                question: "¿Cómo se verifica si un archivo existe antes de abrirlo?",
                options: ["os.path.exists()", "file.exists()", "os.file.check()", "path.isfile()"],
                correct: 0
            },
            {
                question: "¿Qué codificación se recomienda especificar al abrir archivos de texto?",
                options: ["ascii", "utf-8", "latin-1", "unicode"],
                correct: 1
            },
            {
                question: "¿Cómo se formatea una cadena usando f-strings?",
                options: ["f'Hola {nombre}'", "format('Hola {nombre}')", "'Hola %s' % nombre", "Todas las anteriores"],
                correct: 0
            },
            {
                question: "¿Qué método se usa para dividir una cadena en líneas?",
                options: ["split()", "splitlines()", "split('\\n')", "Opciones B y C son correctas"],
                correct: 3
            }
        ]
    },
    
    errors: {
        title: "8. Visualizaciones con Plotly y Shiny",
        description: "Gráficos interactivos",
        video: "https://www.youtube.com/embed/HgbNNgWy7P8",
        additionalVideos: [
            { title: "Plotly Integration with Shiny", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Interactive Charts and Dashboards", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Real-time Data Visualization", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Custom Plot Components", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Errores y Excepciones</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Tipos de errores</h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Errores de sintaxis</h4>
                    <p class="text-sm theme-text-secondary">Errores en la estructura del código</p>
                    <code class="text-sm block mt-2">print("Hola"  # Falta el paréntesis de cierre</code>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">Excepciones</h4>
                    <p class="text-sm theme-text-secondary">Errores durante la ejecución</p>
                    <code class="text-sm block mt-2">10 / 0  # ZeroDivisionError</code>
                </div>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Manejo de excepciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    try:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;numero = int(input("Introduce un número: "))<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;resultado = 10 / numero<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Resultado: {resultado}")<br>
                    except ValueError:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Por favor, introduce un número válido")<br>
                    except ZeroDivisionError:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("No se puede dividir por cero")<br>
                    except Exception as e:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Error inesperado: {e}")<br>
                    finally:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("Fin del programa")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Lanzar excepciones</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    def dividir(a, b):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if b == 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError("El divisor no puede ser cero")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return a / b<br><br>
                    try:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;resultado = dividir(10, 0)<br>
                    except ValueError as e:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(f"Error: {e}")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Excepciones comunes</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">ValueError</h4>
                    <p class="text-sm theme-text-secondary">Valor inapropiado</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">TypeError</h4>
                    <p class="text-sm theme-text-secondary">Tipo de dato incorrecto</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">IndexError</h4>
                    <p class="text-sm theme-text-secondary">Índice fuera de rango</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">KeyError</h4>
                    <p class="text-sm theme-text-secondary">Clave no encontrada</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Manejo básico de errores",
                description: "Crea un programa que maneje errores de conversión",
                template: "# Pide al usuario un número\n# Maneja el error si no introduce un número válido\n# Muestra el doble del número si es válido\n",
                solution: "try:\n    numero = int(input('Introduce un número: '))\n    print(f'El doble es: {numero * 2}')\nexcept ValueError:\n    print('Por favor, introduce un número válido')"
            },
            {
                title: "Función con validación",
                description: "Crea una función que valide la entrada",
                template: "def edad_valida(edad):\n    # Valida que la edad sea un número positivo\n    # Lanza una excepción si no es válida\n    pass\n\n# Prueba la función\n",
                solution: "def edad_valida(edad):\n    if not isinstance(edad, int):\n        raise TypeError('La edad debe ser un número entero')\n    if edad < 0:\n        raise ValueError('La edad no puede ser negativa')\n    return True\n\ntry:\n    edad_valida(25)\n    print('Edad válida')\nexcept (TypeError, ValueError) as e:\n    print(f'Error: {e}')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la diferencia entre try-except y try-finally?",
                options: ["No hay diferencia", "finally siempre se ejecuta", "except es opcional", "finally maneja errores"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción más común al acceder a un índice que no existe?",
                options: ["ValueError", "IndexError", "KeyError", "AttributeError"],
                correct: 1
            },
            {
                question: "¿Cómo se capturan múltiples tipos de excepciones?",
                options: ["except ValueError, TypeError:", "except (ValueError, TypeError):", "except ValueError or TypeError:", "except ValueError and TypeError:"],
                correct: 1
            },
            {
                question: "¿Qué palabra clave se usa para lanzar una excepción manualmente?",
                options: ["throw", "raise", "error", "exception"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción que se lanza al dividir por cero?",
                options: ["ValueError", "ArithmeticError", "ZeroDivisionError", "MathError"],
                correct: 2
            },
            {
                question: "¿Qué hace la cláusula else en un bloque try-except?",
                options: ["Se ejecuta si hay error", "Se ejecuta si no hay error", "Se ejecuta siempre", "No existe else en try-except"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción base de todas las excepciones en Python?",
                options: ["Error", "Exception", "BaseException", "RuntimeError"],
                correct: 2
            },
            {
                question: "¿Cómo se accede al mensaje de error de una excepción?",
                options: ["error.message", "str(error)", "error.text", "error.details"],
                correct: 1
            },
            {
                question: "¿Cuál es la excepción que se lanza al intentar acceder a una clave inexistente en un diccionario?",
                options: ["ValueError", "IndexError", "KeyError", "AttributeError"],
                correct: 2
            },
            {
                question: "¿Cómo se crea una excepción personalizada en Python?",
                options: ["Heredando de Error", "Heredando de Exception", "Heredando de BaseException", "Usando def exception"],
                correct: 1
            }
        ]
    },
    
    classes: {
        title: "9. Layouts y Temas en Shiny",
        description: "Diseño y personalización de aplicaciones",
        video: "https://www.youtube.com/embed/VtchVpoSdoQ",
        additionalVideos: [
            { title: "Shiny Layout Systems Deep Dive", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Custom CSS in Shiny Applications", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Responsive Design with Shiny", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Theme Customization Tutorial", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Clases y Objetos</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Definir una clase</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Persona:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, nombre, edad):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.nombre = nombre<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.edad = edad<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def saludar(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Hola, soy {self.nombre}"<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def cumplir_anos(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.edad += 1<br><br>
                    # Crear una instancia<br>
                    persona1 = Persona("Juan", 30)<br>
                    print(persona1.saludar())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Herencia</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Estudiante(Persona):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, nombre, edad, carrera):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(nombre, edad)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.carrera = carrera<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def estudiar(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"{self.nombre} está estudiando {self.carrera}"<br><br>
                    estudiante = Estudiante("Ana", 20, "Informática")<br>
                    print(estudiante.saludar())<br>
                    print(estudiante.estudiar())
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Métodos especiales</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    class Punto:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, x, y):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.x = x<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.y = y<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __str__(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Punto({self.x}, {self.y})"<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __add__(self, otro):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return Punto(self.x + otro.x, self.y + otro.y)<br><br>
                    p1 = Punto(1, 2)<br>
                    p2 = Punto(3, 4)<br>
                    p3 = p1 + p2<br>
                    print(p3)  # Punto(4, 6)
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Propiedades</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    class Circulo:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, radio):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._radio = radio<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def radio(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return self._radio<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@radio.setter<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def radio(self, valor):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if valor > 0:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._radio = valor<br><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;@property<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;def area(self):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 3.14159 * self._radio ** 2
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Clase básica",
                description: "Crea una clase Coche con propiedades básicas",
                template: "class Coche:\n    # Define el constructor con marca, modelo y año\n    # Crea un método para mostrar información\n    pass\n\n# Crea una instancia y prueba el método\n",
                solution: "class Coche:\n    def __init__(self, marca, modelo, año):\n        self.marca = marca\n        self.modelo = modelo\n        self.año = año\n    \n    def info(self):\n        return f'{self.marca} {self.modelo} ({self.año})'\n\ncoche = Coche('Toyota', 'Corolla', 2020)\nprint(coche.info())"
            },
            {
                title: "Herencia práctica",
                description: "Crea una clase Animal y una subclase Perro",
                template: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    \n    def hacer_sonido(self):\n        pass\n\nclass Perro(Animal):\n    # Completa la clase Perro\n    pass\n",
                solution: "class Animal:\n    def __init__(self, nombre):\n        self.nombre = nombre\n    \n    def hacer_sonido(self):\n        pass\n\nclass Perro(Animal):\n    def hacer_sonido(self):\n        return f'{self.nombre} dice: Guau!'\n\nperro = Perro('Rex')\nprint(perro.hacer_sonido())"
            }
        ],
        quiz: [
            {
                question: "¿Qué es self en Python?",
                options: ["Una palabra reservada", "Referencia al objeto actual", "Un tipo de dato", "Una función especial"],
                correct: 1
            },
            {
                question: "¿Cuál es el método especial que se ejecuta al crear un objeto?",
                options: ["__init__", "__new__", "__create__", "__start__"],
                correct: 0
            },
            {
                question: "¿Cómo se define herencia en Python?",
                options: ["class Hijo extends Padre:", "class Hijo(Padre):", "class Hijo inherits Padre:", "class Hijo -> Padre:"],
                correct: 1
            },
            {
                question: "¿Qué es el encapsulamiento en programación orientada a objetos?",
                options: ["Ocultar detalles internos", "Crear múltiples objetos", "Heredar de otras clases", "Usar métodos estáticos"],
                correct: 0
            },
            {
                question: "¿Cómo se define un atributo privado en Python?",
                options: ["private atributo", "_atributo", "__atributo", "private __atributo"],
                correct: 2
            },
            {
                question: "¿Qué método se llama cuando se usa print() en un objeto?",
                options: ["__print__", "__str__", "__display__", "__show__"],
                correct: 1
            },
            {
                question: "¿Cuál es la diferencia entre método de clase y método de instancia?",
                options: ["No hay diferencia", "Los métodos de clase usan @classmethod", "Los métodos de instancia son más rápidos", "Los métodos de clase no pueden acceder a self"],
                correct: 1
            },
            {
                question: "¿Qué permite el polimorfismo en Python?",
                options: ["Crear objetos múltiples", "Usar el mismo método en diferentes clases", "Heredar de múltiples clases", "Encapsular datos"],
                correct: 1
            },
            {
                question: "¿Qué método se usa para comparar si dos objetos son iguales?",
                options: ["__equal__", "__eq__", "__compare__", "__same__"],
                correct: 1
            },
            {
                question: "¿Python soporta herencia múltiple?",
                options: ["No", "Sí", "Solo con interfaces", "Solo en Python 3"],
                correct: 1
            }
        ]
    },
    
    stdlib: {
        title: "10. Integración de Datos con Pandas",
        description: "Manejo de datos en aplicaciones Shiny",
        video: "https://www.youtube.com/embed/dAkbbEnFgHs",
        additionalVideos: [
            { title: "Pandas Data Integration in Shiny", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Real-time Data Updates", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "CSV and Excel File Handling", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Database Connections in Shiny", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Biblioteca Estándar de Python</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos más útiles</h3>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">os - Sistema Operativo</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import os<br><br>
                    # Directorio actual<br>
                    print(os.getcwd())<br><br>
                    # Listar archivos<br>
                    print(os.listdir('.'))<br><br>
                    # Variables de entorno<br>
                    print(os.environ.get('HOME'))
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">datetime - Fechas y Horas</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from datetime import datetime, date, timedelta<br><br>
                    # Fecha actual<br>
                    hoy = date.today()<br>
                    print(hoy)<br><br>
                    # Fecha y hora actual<br>
                    ahora = datetime.now()<br>
                    print(ahora)<br><br>
                    # Operaciones con fechas<br>
                    mañana = hoy + timedelta(days=1)<br>
                    print(mañana)
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">collections - Estructuras de Datos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from collections import Counter, defaultdict<br><br>
                    # Contador<br>
                    palabras = ['python', 'es', 'genial', 'python', 'es']<br>
                    contador = Counter(palabras)<br>
                    print(contador)  # Counter({'python': 2, 'es': 2, 'genial': 1})<br><br>
                    # Diccionario con valor por defecto<br>
                    dd = defaultdict(list)<br>
                    dd['frutas'].append('manzana')<br>
                    print(dd)
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">itertools - Iteradores</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import itertools<br><br>
                    # Combinaciones<br>
                    for combo in itertools.combinations(['A', 'B', 'C'], 2):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(combo)<br><br>
                    # Ciclo infinito<br>
                    colores = itertools.cycle(['rojo', 'verde', 'azul'])<br>
                    for i, color in enumerate(colores):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if i > 5:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;print(color)
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Trabajando con fechas",
                description: "Calcula tu edad en días",
                template: "from datetime import date\n\n# Tu fecha de nacimiento (año, mes, día)\nnacimiento = date(2000, 1, 1)\nhoy = date.today()\n\n# Calcula la diferencia\n",
                solution: "from datetime import date\n\nnacimiento = date(2000, 1, 1)\nhoy = date.today()\ndiferencia = hoy - nacimiento\nprint(f'Has vivido {diferencia.days} días')"
            },
            {
                title: "Contador de palabras",
                description: "Cuenta las palabras en un texto",
                template: "from collections import Counter\n\ntexto = \"python es genial python es fácil\"\npalabras = texto.split()\n\n# Usa Counter para contar las palabras\n",
                solution: "from collections import Counter\n\ntexto = \"python es genial python es fácil\"\npalabras = texto.split()\ncontador = Counter(palabras)\nprint(contador)\nprint(f'La palabra más común es: {contador.most_common(1)[0]}')"
            }
        ],
        quiz: [
            {
                question: "¿Qué módulo usarías para trabajar con fechas?",
                options: ["time", "datetime", "date", "calendar"],
                correct: 1
            },
            {
                question: "¿Qué función del módulo os usarías para listar archivos?",
                options: ["os.list()", "os.listdir()", "os.files()", "os.dir()"],
                correct: 1
            },
            {
                question: "¿Cómo se obtiene el directorio actual de trabajo?",
                options: ["os.getcwd()", "os.pwd()", "os.currentdir()", "sys.path[0]"],
                correct: 0
            },
            {
                question: "¿Qué clase de collections es útil para contar elementos?",
                options: ["Counter", "OrderedDict", "defaultdict", "deque"],
                correct: 0
            },
            {
                question: "¿Cómo se genera un número aleatorio entre 0 y 1?",
                options: ["random.random()", "random.uniform(0,1)", "random.float()", "Opciones A y B son correctas"],
                correct: 3
            },
            {
                question: "¿Qué módulo se usa para expresiones regulares?",
                options: ["regex", "re", "regexp", "pattern"],
                correct: 1
            },
            {
                question: "¿Cómo se crea una fecha de hoy con datetime?",
                options: ["datetime.now()", "datetime.today()", "datetime.date.today()", "Todas las anteriores"],
                correct: 2
            },
            {
                question: "¿Qué función de sys contiene los argumentos de línea de comandos?",
                options: ["sys.args", "sys.argv", "sys.arguments", "sys.params"],
                correct: 1
            },
            {
                question: "¿Cómo se formatea un número decimal con 2 decimales usando format?",
                options: ["'{:.2f}'.format(num)", "'{:2f}'.format(num)", "'{:f2}'.format(num)", "'{f:.2}'.format(num)"],
                correct: 0
            },
            {
                question: "¿Qué módulo permite crear números complejos y trabajar con matemática avanzada?",
                options: ["math", "cmath", "numbers", "complex"],
                correct: 1
            }
        ]
    },
    
    stdlib2: {
        title: "11. Testing y Calidad en Shiny",
        description: "Pruebas y mejores prácticas",
        video: "https://www.youtube.com/embed/VtchVpoSdoQ",
        additionalVideos: [
            { title: "Unit Testing Shiny Applications", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "End-to-End Testing with Playwright", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Code Quality and Linting", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Performance Testing", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Biblioteca Estándar - Parte II</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Módulos Avanzados</h3>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">threading - Hilos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import threading<br>
                    import time<br><br>
                    def tarea(nombre):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;for i in range(5):<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"{nombre}: {i}")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(1)<br><br>
                    # Crear hilos<br>
                    hilo1 = threading.Thread(target=tarea, args=("Hilo-1",))<br>
                    hilo2 = threading.Thread(target=tarea, args=("Hilo-2",))<br><br>
                    hilo1.start()<br>
                    hilo2.start()
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">logging - Registro de eventos</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import logging<br><br>
                    # Configurar logging<br>
                    logging.basicConfig(level=logging.INFO)<br><br>
                    # Diferentes niveles<br>
                    logging.debug("Mensaje de depuración")<br>
                    logging.info("Información general")<br>
                    logging.warning("Advertencia")<br>
                    logging.error("Error")<br>
                    logging.critical("Error crítico")
                </code>
            </div>
            
            <h4 class="text-lg font-semibold theme-text-primary mb-2">decimal - Aritmética decimal</h4>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    from decimal import Decimal<br><br>
                    # Problemas con float<br>
                    print(0.1 + 0.2)  # 0.30000000000000004<br><br>
                    # Solución con Decimal<br>
                    a = Decimal('0.1')<br>
                    b = Decimal('0.2')<br>
                    print(a + b)  # 0.3
                </code>
            </div>
        `,
        exercises: [
            {
                title: "Logging básico",
                description: "Configura y usa logging en tu código",
                template: "import logging\n\n# Configura logging\n# Registra mensajes de diferentes niveles\n",
                solution: "import logging\n\nlogging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')\n\nlogging.info('Programa iniciado')\nlogging.warning('Esto es una advertencia')\nlogging.error('Esto es un error')\nlogging.info('Programa terminado')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja de usar Decimal sobre float?",
                options: ["Es más rápido", "Más preciso para decimales", "Ocupa menos memoria", "Es más fácil de usar"],
                correct: 1
            },
            {
                question: "¿Qué niveles de logging existen en Python (de menor a mayor severidad)?",
                options: ["DEBUG, INFO, WARNING, ERROR, CRITICAL", "LOW, MEDIUM, HIGH, CRITICAL", "TRACE, DEBUG, INFO, WARN, ERROR", "ALL, INFO, WARNING, ERROR, NONE"],
                correct: 0
            },
            {
                question: "¿Cómo se configura el formato de los mensajes de logging?",
                options: ["logging.format()", "logging.basicConfig(format=...)", "logging.setFormat()", "logging.config()"],
                correct: 1
            },
            {
                question: "¿Qué módulo se usa para trabajar con datos JSON en Python?",
                options: ["json", "simplejson", "jsonlib", "data"],
                correct: 0
            },
            {
                question: "¿Cómo se convierte un diccionario Python a JSON?",
                options: ["json.dumps()", "json.loads()", "json.encode()", "json.parse()"],
                correct: 0
            },
            {
                question: "¿Qué módulo permite hacer peticiones HTTP en Python?",
                options: ["http", "requests (externa)", "urllib", "Opciones B y C son correctas"],
                correct: 3
            },
            {
                question: "¿Para qué sirve el módulo itertools?",
                options: ["Trabajar con archivos", "Crear iteradores eficientes", "Manejar fechas", "Procesar JSON"],
                correct: 1
            },
            {
                question: "¿Qué función de itertools combina múltiples iterables?",
                options: ["itertools.combine()", "itertools.chain()", "itertools.merge()", "itertools.join()"],
                correct: 1
            },
            {
                question: "¿Cómo se convierte una cadena JSON a un objeto Python?",
                options: ["json.loads()", "json.dumps()", "json.parse()", "json.decode()"],
                correct: 0
            },
            {
                question: "¿Qué módulo se usa para trabajar con archivos CSV?",
                options: ["csv", "file", "data", "table"],
                correct: 0
            }
        ]
    },
    
    venv: {
        title: "12. Deployment de Aplicaciones Shiny",
        description: "Publicación y hosting",
        video: "https://www.youtube.com/embed/HgbNNgWy7P8",
        additionalVideos: [
            { title: "Deploy Shiny Apps to Cloud", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Docker Containerization for Shiny", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Shiny Server Configuration", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Production Deployment Best Practices", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Entornos Virtuales y Paquetes</h2>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">¿Qué son los entornos virtuales?</h3>
            <p class="theme-text-secondary mb-4">Los entornos virtuales permiten tener instalaciones separadas de Python para diferentes proyectos, evitando conflictos entre versiones de paquetes.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Crear un entorno virtual</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Crear entorno virtual<br>
                    python -m venv mi_entorno<br><br>
                    # Activar (Windows)<br>
                    mi_entorno\\Scripts\\activate<br><br>
                    # Activar (macOS/Linux)<br>
                    source mi_entorno/bin/activate<br><br>
                    # Desactivar<br>
                    deactivate
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Gestión de paquetes con pip</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    # Instalar paquete<br>
                    pip install requests<br><br>
                    # Instalar versión específica<br>
                    pip install requests==2.25.1<br><br>
                    # Listar paquetes instalados<br>
                    pip list<br><br>
                    # Guardar dependencias<br>
                    pip freeze > requirements.txt<br><br>
                    # Instalar desde requirements.txt<br>
                    pip install -r requirements.txt
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Buenas prácticas</h3>
            <div class="space-y-4">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">1. Un entorno por proyecto</h4>
                    <p class="text-sm theme-text-secondary">Cada proyecto debería tener su propio entorno virtual</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">2. Documentar dependencias</h4>
                    <p class="text-sm theme-text-secondary">Mantén actualizado el archivo requirements.txt</p>
                </div>
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary">3. No versionar el entorno</h4>
                    <p class="text-sm theme-text-secondary">Agrega la carpeta del entorno virtual al .gitignore</p>
                </div>
            </div>
        `,
        exercises: [
            {
                title: "Simulación de pip",
                description: "Simula el uso de pip para instalar paquetes",
                template: "# Simula los comandos que usarías para:\n# 1. Crear un entorno virtual\n# 2. Activarlo\n# 3. Instalar requests\n# 4. Guardar dependencias\n\nprint('Comandos para gestionar entornos virtuales:')",
                solution: "print('Comandos para gestionar entornos virtuales:')\nprint('1. python -m venv mi_proyecto')\nprint('2. source mi_proyecto/bin/activate (Linux/Mac)')\nprint('   mi_proyecto\\\\Scripts\\\\activate (Windows)')\nprint('3. pip install requests')\nprint('4. pip freeze > requirements.txt')\nprint('5. deactivate')"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la ventaja principal de usar entornos virtuales?",
                options: ["Son más rápidos", "Aíslan las dependencias", "Ocupan menos espacio", "Son más seguros"],
                correct: 1
            },
            {
                question: "¿Cómo se crea un entorno virtual con venv?",
                options: ["python -m venv nombre", "venv create nombre", "python venv nombre", "create venv nombre"],
                correct: 0
            },
            {
                question: "¿Cómo se activa un entorno virtual en Linux/Mac?",
                options: ["activate nombre", "source nombre/bin/activate", "nombre/activate", "./nombre/activate"],
                correct: 1
            },
            {
                question: "¿Cómo se desactiva un entorno virtual?",
                options: ["exit", "deactivate", "stop", "quit"],
                correct: 1
            },
            {
                question: "¿Qué archivo contiene las dependencias de un proyecto?",
                options: ["dependencies.txt", "packages.txt", "requirements.txt", "libs.txt"],
                correct: 2
            },
            {
                question: "¿Cómo se instalan las dependencias desde requirements.txt?",
                options: ["pip install requirements.txt", "pip install -r requirements.txt", "pip -r requirements.txt", "pip requirements.txt"],
                correct: 1
            },
            {
                question: "¿Cómo se genera el archivo requirements.txt?",
                options: ["pip freeze > requirements.txt", "pip list > requirements.txt", "pip save requirements.txt", "pip export requirements.txt"],
                correct: 0
            },
            {
                question: "¿Dónde se almacenan los paquetes en un entorno virtual?",
                options: ["En /usr/local/lib", "En el directorio del entorno virtual", "En ~/.python", "En el directorio del proyecto"],
                correct: 1
            },
            {
                question: "¿Cómo se actualiza pip en un entorno virtual?",
                options: ["pip update", "pip upgrade", "pip install --upgrade pip", "update pip"],
                correct: 2
            },
            {
                question: "¿Cuál es la diferencia entre virtualenv y venv?",
                options: ["No hay diferencia", "venv está incluido en Python 3.3+", "virtualenv es más rápido", "venv solo funciona en Linux"],
                correct: 1
            }
        ]
    },
    
    deepseek: {
        title: "13. Shiny con Machine Learning",
        description: "Integrando ML en aplicaciones Shiny",
        video: "https://www.youtube.com/embed/VtchVpoSdoQ",
        additionalVideos: [
            { title: "Machine Learning Models in Shiny", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Real-time ML Predictions", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "AI-Powered Dashboards", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Scikit-learn Integration", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">DeepSeek IA - Tu Asistente de Programación</h2>
            <p class="theme-text-secondary mb-6">DeepSeek es un asistente de inteligencia artificial gratuito que puede ayudarte con programación en Python, resolver dudas, explicar código y mucho más.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Ayuda con Código</h3>
                    <p class="text-sm theme-text-secondary text-center">Obtén ayuda para escribir, depurar y optimizar tu código Python</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-question-circle text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Explicaciones</h3>
                    <p class="text-sm theme-text-secondary text-center">Recibe explicaciones detalladas de conceptos de programación</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-lightbulb text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Ideas de Proyectos</h3>
                    <p class="text-sm theme-text-secondary text-center">Descubre nuevas ideas para proyectos y ejercicios</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Aprendizaje</h3>
                    <p class="text-sm theme-text-secondary text-center">Aprende nuevos conceptos y mejores prácticas</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">Chat DeepSeek IA</h3>
                <div class="theme-bg-tertiary rounded-xl overflow-hidden" style="height: 600px;">
                    <iframe 
                        src="https://www.ChatStream.org/embed" 
                        width="100%" 
                        height="100%" 
                        frameborder="0"
                        style="border-radius: 12px;">
                    </iframe>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <h4 class="font-semibold theme-text-primary mb-2">💡 Consejos para usar DeepSeek:</h4>
                <ul class="text-sm theme-text-secondary space-y-1 ml-4">
                    <li>• Sé específico en tus preguntas sobre Python</li>
                    <li>• Comparte tu código para obtener ayuda personalizada</li>
                    <li>• Pregunta sobre mejores prácticas y optimizaciones</li>
                    <li>• Solicita explicaciones paso a paso de algoritmos</li>
                    <li>• Pide ideas para proyectos de práctica</li>
                </ul>
            </div>
        `,
        exercises: [
            {
                title: "Pregunta a la IA",
                description: "Usa DeepSeek para obtener ayuda con un concepto de Python que no entiendas",
                template: "# Ejemplo de pregunta para DeepSeek:\n# '¿Puedes explicarme cómo funcionan las list comprehensions en Python con ejemplos?'\n\n# Tu código de práctica aquí",
                solution: "# Ejemplo de respuesta que podrías obtener:\n# List comprehensions son una forma concisa de crear listas\nlist_comp = [x**2 for x in range(10) if x % 2 == 0]\nprint(list_comp)  # [0, 4, 16, 36, 64]"
            }
        ],
        quiz: [
            {
                question: "¿Para qué puedes usar DeepSeek IA en tu aprendizaje de Python?",
                options: ["Solo para escribir código", "Solo para explicaciones", "Para código, explicaciones, depuración y proyectos", "Solo para proyectos"],
                correct: 2
            },
            {
                question: "¿Cuál es la principal ventaja de DeepSeek IA para estudiantes?",
                options: ["Es muy caro", "Es completamente gratuito", "Solo funciona en inglés", "Requiere instalación"],
                correct: 1
            },
            {
                question: "¿Qué tipo de asistencia puede proporcionar DeepSeek con el código Python?",
                options: ["Solo sintaxis básica", "Explicaciones, correcciones y optimizaciones", "Solo errores simples", "Solo comentarios"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede ayudar con proyectos completos de Python?",
                options: ["No, solo líneas individuales", "Sí, puede asistir en proyectos completos", "Solo con funciones simples", "Solo con variables"],
                correct: 1
            },
            {
                question: "¿Cómo puede DeepSeek ayudar en la depuración de código?",
                options: ["No puede ayudar con errores", "Identifica errores y sugiere soluciones", "Solo muestra errores de sintaxis", "Solo funciona con print()"],
                correct: 1
            },
            {
                question: "¿Qué ventaja tiene usar IA para aprender Python?",
                options: ["Reemplaza completamente a los profesores", "Proporciona asistencia personalizada 24/7", "Solo funciona para expertos", "Es más lento que los libros"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede explicar conceptos complejos de Python?",
                options: ["Solo conceptos básicos", "Sí, desde básicos hasta avanzados", "Solo sintaxis", "Solo errores"],
                correct: 1
            },
            {
                question: "¿Cómo puede DeepSeek ayudar con las mejores prácticas de Python?",
                options: ["No conoce mejores prácticas", "Sugiere mejoras y optimizaciones", "Solo corrige errores", "Solo da ejemplos básicos"],
                correct: 1
            },
            {
                question: "¿Qué tipo de preguntas puedes hacer a DeepSeek sobre Python?",
                options: ["Solo preguntas muy básicas", "Cualquier pregunta relacionada con Python", "Solo sobre errores", "Solo sobre sintaxis"],
                correct: 1
            },
            {
                question: "¿DeepSeek puede ayudar a generar código Python desde descripciones?",
                options: ["No puede generar código", "Sí, puede convertir descripciones en código", "Solo copia código existente", "Solo modifica código existente"],
                correct: 1
            }
        ]
    },
    
    "google-colab": {
        title: "14. Shiny en la Nube y Colaboración",
        description: "Desarrollo colaborativo de aplicaciones",
        video: "https://www.youtube.com/embed/HgbNNgWy7P8",
        additionalVideos: [
            { title: "Cloud Development for Shiny", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Collaborative Shiny Development", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Version Control for Shiny Projects", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Team Development Workflows", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Google Colab - Tu Laboratorio Python en la Nube</h2>
            <p class="theme-text-secondary mb-6">Google Colaboratory es un entorno de Jupyter notebook gratuito que se ejecuta completamente en la nube. Perfecto para practicar Python sin instalaciones.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-cloud text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Gratis y en la Nube</h3>
                    <p class="text-sm theme-text-secondary text-center">Sin instalaciones, ejecuta Python directamente en tu navegador</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-save text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Auto-guardado</h3>
                    <p class="text-sm theme-text-secondary text-center">Tus notebooks se guardan automáticamente en Google Drive</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-share-alt text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Colaborativo</h3>
                    <p class="text-sm theme-text-secondary text-center">Comparte y colabora en tiempo real con otros</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-rocket text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">GPU Gratuita</h3>
                    <p class="text-sm theme-text-secondary text-center">Acceso gratuito a GPU para proyectos de IA</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Crear Nuevo Notebook</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-blue-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Comienza a programar ahora!</h4>
                            <p class="theme-text-secondary mb-4">Cada vez que hagas clic, se abrirá un nuevo notebook en Google Colab listo para usar.</p>
                            <button id="newColabBtn" class="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fab fa-google mr-2"></i>Abrir Nuevo Notebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">📝 Características</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Jupyter Notebooks en la nube</li>
                        <li>• Python 3.x preinstalado</li>
                        <li>• Bibliotecas populares incluidas</li>
                        <li>• Visualización de datos integrada</li>
                        <li>• Markdown y LaTeX soportados</li>
                    </ul>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">📚 Bibliotecas Incluidas</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• NumPy - Computación numérica</li>
                        <li>• Pandas - Análisis de datos</li>
                        <li>• Matplotlib - Visualización</li>
                        <li>• TensorFlow - Machine Learning</li>
                        <li>• Y muchas más...</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-3">🎯 Primeros Pasos en Colab:</h4>
                <ol class="text-sm theme-text-secondary space-y-2 ml-4">
                    <li>1. Haz clic en "Abrir Nuevo Notebook" arriba</li>
                    <li>2. Inicia sesión con tu cuenta de Google</li>
                    <li>3. ¡Empieza a escribir código Python!</li>
                    <li>4. Presiona Shift+Enter para ejecutar celdas</li>
                    <li>5. Tu trabajo se guarda automáticamente</li>
                </ol>
            </div>
            
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Consejo Pro:</h4>
                <p class="text-sm text-blue-700 dark:text-blue-300">
                    Usa Google Colab para experimentar con el código de los ejercicios de esta academia. 
                    Es perfecto para proyectos de ciencia de datos y machine learning.
                </p>
            </div>
        `,
        exercises: [
            {
                title: "Tu primer notebook",
                description: "Abre Google Colab y crea tu primer programa",
                template: "# En Google Colab, escribe este código:\nprint('¡Hola desde Google Colab!')\n\n# Luego presiona Shift+Enter para ejecutar",
                solution: "print('¡Hola desde Google Colab!')\n# ¡Así de fácil! Colab ejecuta el código en la nube"
            },
            {
                title: "Explora las bibliotecas",
                description: "Prueba algunas bibliotecas preinstaladas en Colab",
                template: "# Prueba estas bibliotecas en Colab:\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Crea un gráfico simple\n# Tu código aquí",
                solution: "import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\nplt.plot(x, y)\nplt.title('Función Seno')\nplt.show()"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal ventaja de Google Colab?",
                options: ["Es más rápido que Python local", "No requiere instalación y es gratuito", "Solo funciona con Google", "Es mejor para principiantes"],
                correct: 1
            },
            {
                question: "¿Cómo ejecutas una celda de código en Google Colab?",
                options: ["Ctrl+Enter", "Shift+Enter", "Alt+Enter", "F5"],
                correct: 1
            },
            {
                question: "¿Qué bibliotecas vienen preinstaladas en Google Colab?",
                options: ["Solo NumPy", "NumPy, Pandas, Matplotlib y muchas más", "Solo bibliotecas básicas", "Ninguna"],
                correct: 1
            },
            {
                question: "¿Dónde se ejecuta el código en Google Colab?",
                options: ["En tu computadora local", "En los servidores de Google", "En tu navegador", "En tu teléfono"],
                correct: 1
            },
            {
                question: "¿Necesitas una cuenta de Google para usar Colab?",
                options: ["No", "Sí", "Solo para proyectos grandes", "Solo para guardar archivos"],
                correct: 1
            },
            {
                question: "¿Qué tipo de archivos puedes crear en Google Colab?",
                options: ["Solo .py", "Solo .txt", "Notebooks .ipynb", "Solo .html"],
                correct: 2
            },
            {
                question: "¿Cómo compartes un notebook de Colab con otros?",
                options: ["No se puede compartir", "Mediante un enlace compartible", "Solo por email", "Solo descargando el archivo"],
                correct: 1
            },
            {
                question: "¿Google Colab ofrece GPU gratuita?",
                options: ["No", "Sí, con limitaciones", "Solo para universidades", "Solo para empresas"],
                correct: 1
            },
            {
                question: "¿Cómo instalas nuevas bibliotecas en Colab?",
                options: ["pip install en una celda", "No se pueden instalar", "Solo desde configuración", "Descargando manualmente"],
                correct: 0
            },
            {
                question: "¿Los archivos en Colab se guardan permanentemente?",
                options: ["Sí, siempre", "No, se eliminan después de inactividad", "Solo los importantes", "Solo si los descargas"],
                correct: 1
            }
        ]
    },
    
    cursor: {
        title: "15. Shiny Avanzado y Optimización",
        description: "Técnicas avanzadas y mejores prácticas",
        video: "https://www.youtube.com/embed/dAkbbEnFgHs",
        additionalVideos: [
            { title: "Performance Optimization in Shiny", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Advanced Reactive Programming", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Security Best Practices", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Scaling Shiny Applications", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Cursor IDE - Editor de Código con IA</h2>
            <p class="theme-text-secondary mb-6">Cursor es un editor de código revolucionario que integra inteligencia artificial directamente en tu flujo de trabajo de programación. Basado en VS Code pero potenciado con IA.</p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">IA Integrada</h3>
                    <p class="text-sm theme-text-secondary text-center">Autocompletado inteligente y generación de código con IA</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Compatible con VS Code</h3>
                    <p class="text-sm theme-text-secondary text-center">Todas tus extensiones y configuraciones funcionan</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-comments text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Chat con IA</h3>
                    <p class="text-sm theme-text-secondary text-center">Pregunta directamente sobre tu código y proyectos</p>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-magic text-white text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold theme-text-primary mb-2 text-center">Refactoring IA</h3>
                    <p class="text-sm theme-text-secondary text-center">Mejora automática y refactorización de código</p>
                </div>
            </div>
            
            <div class="mb-8">
                <h3 class="text-xl font-semibold theme-text-primary mb-4">🚀 Abrir Cursor IDE</h3>
                <div class="space-y-4">
                    <div class="p-6 theme-bg-tertiary rounded-xl border-2 border-purple-500">
                        <div class="text-center">
                            <h4 class="text-lg font-semibold theme-text-primary mb-3">¡Lanza Cursor desde tu sistema!</h4>
                            <p class="theme-text-secondary mb-4">Detectaremos tu sistema operativo y ejecutaremos el comando apropiado para abrir Cursor IDE.</p>
                            <button id="launchCursorBtn" class="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                <i class="fas fa-terminal mr-2"></i>Ejecutar Cursor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🖥️ Windows</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde PowerShell/CMD</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🍎 macOS</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde Terminal</p>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h4 class="font-semibold theme-text-primary mb-2">🐧 Linux</h4>
                    <code class="text-xs theme-text-secondary">cursor</code>
                    <p class="text-xs theme-text-secondary mt-1">Comando desde Terminal</p>
                </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">⚡ Características IA</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Tab para autocompletado inteligente</li>
                        <li>• Cmd+K para editar con IA</li>
                        <li>• Cmd+L para chat con IA</li>
                        <li>• Generación de código completo</li>
                        <li>• Explicación de errores automática</li>
                    </ul>
                </div>
                
                <div class="p-6 theme-bg-tertiary rounded-xl">
                    <h4 class="text-lg font-semibold theme-text-primary mb-3">🔧 Instalación</h4>
                    <ul class="text-sm theme-text-secondary space-y-2">
                        <li>• Descargar desde cursor.com</li>
                        <li>• Instalar como aplicación normal</li>
                        <li>• Configurar comando en terminal</li>
                        <li>• Importar configuración de VS Code</li>
                        <li>• ¡Listo para programar con IA!</li>
                    </ul>
                </div>
            </div>
            
            <div class="p-4 theme-bg-tertiary rounded-lg mb-6">
                <h4 class="font-semibold theme-text-primary mb-3">🎯 Cómo usar Cursor:</h4>
                <ol class="text-sm theme-text-secondary space-y-2 ml-4">
                    <li>1. Descarga e instala Cursor desde cursor.com</li>
                    <li>2. Configura el comando en terminal (Ver → Command Palette → "Install cursor command")</li>
                    <li>3. Abre un proyecto: <code>cursor .</code> en tu directorio</li>
                    <li>4. Usa Tab para autocompletado IA</li>
                    <li>5. Usa Cmd+L para chatear con la IA sobre tu código</li>
                </ol>
            </div>
            
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">⚠️ Nota importante:</h4>
                <p class="text-sm text-purple-700 dark:text-purple-300">
                    Para que el botón funcione, necesitas tener Cursor IDE instalado y configurado en tu sistema. 
                    Si no lo tienes, el botón te mostrará instrucciones de instalación.
                </p>
            </div>
        `,
        exercises: [
            {
                title: "Instala Cursor",
                description: "Descarga e instala Cursor IDE en tu sistema",
                template: "# Pasos para instalar Cursor:\n# 1. Ir a cursor.com\n# 2. Descargar para tu OS\n# 3. Instalar normalmente\n# 4. Configurar comando terminal\n\n# Una vez instalado, puedes usar:\n# cursor . (para abrir directorio actual)",
                solution: "# Cursor instalado correctamente!\n# Ahora puedes usar:\ncursor .  # Abre directorio actual\ncursor archivo.py  # Abre archivo específico\n# ¡Disfruta programando con IA!"
            },
            {
                title: "Primeros pasos con IA",
                description: "Experimenta con las funciones de IA de Cursor",
                template: "# En Cursor, prueba estos comandos:\n# 1. Tab - Autocompletado IA\n# 2. Cmd+K (Ctrl+K) - Editar con IA\n# 3. Cmd+L (Ctrl+L) - Chat con IA\n\n# Escribe un comentario describiendo qué quieres hacer\n# y presiona Tab para ver la magia",
                solution: "# Ejemplo de uso:\n# Escribes: \"función que calcule factorial\"\n# Presionas Tab y Cursor genera:\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)"
            }
        ],
        quiz: [
            {
                question: "¿Cuál es la principal ventaja de Cursor sobre VS Code?",
                options: ["Es más rápido", "Tiene IA integrada", "Es gratis", "Tiene mejor interfaz"],
                correct: 1
            },
            {
                question: "¿Qué comando usas para abrir el directorio actual en Cursor?",
                options: ["cursor .", "cursor open", "cursor start", "cursor run"],
                correct: 0
            },
            {
                question: "¿Qué tecla usas para activar el autocompletado IA en Cursor?",
                options: ["Enter", "Tab", "Space", "Ctrl"],
                correct: 1
            },
            {
                question: "¿Qué combinación de teclas abre el chat IA en Cursor?",
                options: ["Ctrl+C", "Cmd+L (Ctrl+L)", "Alt+A", "Shift+I"],
                correct: 1
            },
            {
                question: "¿Cursor está basado en qué editor?",
                options: ["Atom", "VS Code", "Sublime Text", "IntelliJ"],
                correct: 1
            },
            {
                question: "¿Qué comando usas para editar código con IA en Cursor?",
                options: ["Cmd+E", "Cmd+K (Ctrl+K)", "Cmd+I", "Cmd+A"],
                correct: 1
            },
            {
                question: "¿Cursor requiere una suscripción para usar todas sus funciones?",
                options: ["Sí, siempre", "No, es completamente gratis", "Tiene versión gratuita con limitaciones", "Solo para estudiantes"],
                correct: 2
            },
            {
                question: "¿Qué tipo de archivos puede manejar Cursor?",
                options: ["Solo Python", "Solo JavaScript", "Cualquier lenguaje de programación", "Solo archivos de texto"],
                correct: 2
            },
            {
                question: "¿Cómo instalas Cursor en tu sistema?",
                options: ["npm install cursor", "Desde cursor.com", "pip install cursor", "apt install cursor"],
                correct: 1
            },
            {
                question: "¿La IA de Cursor puede entender el contexto de todo tu proyecto?",
                options: ["No, solo líneas individuales", "Sí, puede analizar todo el proyecto", "Solo archivos abiertos", "Solo comentarios"],
                correct: 1
            }
        ]
    },
    
    "control-flow": {
        title: "4. Control de Flujo en Shiny",
        description: "Lógica condicional y loops reactivos",
        video: "https://www.youtube.com/embed/9uKhJg_l5jU",
        additionalVideos: [
            { title: "Conditional UI in Shiny", url: "https://www.youtube.com/embed/HgbNNgWy7P8" },
            { title: "Dynamic UI Generation", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Reactive Loops and Iterations", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "Event-Driven Programming", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Control de Flujo en Aplicaciones Shiny</h2>
            <p class="theme-text-secondary mb-4">El control de flujo en Shiny va más allá de las estructuras tradicionales de Python. Incluye lógica reactiva, UI condicional y manejo de eventos.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">UI Condicional</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from shiny import ui, render<br><br>
                    @render.ui<br>
                    def conditional_ui():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if input.show_advanced():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ui.div(<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui.input_slider("advanced_param", "Parámetro", 0, 100, 50)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return ui.div("Opciones básicas")
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Lógica Reactiva</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from shiny import reactive<br><br>
                    @reactive.Calc<br>
                    def filtered_data():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;data = get_data()<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;if input.filter_enabled():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return data[data['value'] > input.threshold()]<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return data
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Manejo de Eventos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    @reactive.Effect<br>
                    @reactive.event(input.action_button)<br>
                    def handle_click():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;# Esta función se ejecuta solo cuando se hace clic<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;process_data()<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;update_ui()
                </code>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🔄 Control de Flujo Reactivo</h4>
                <p class="theme-text-secondary mb-4">Experimenta con patrones de control de flujo específicos de Shiny.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Practicar en Google Colab
                    </button>
                </div>
            </div>
        `,
        exercises: [
            {
                id: 1,
                title: "UI Condicional Básica",
                description: "Crea una aplicación con elementos UI que aparezcan/desaparezcan según un checkbox.",
                difficulty: "Intermedio",
                points: 15
            },
            {
                id: 2,
                title: "Filtros Reactivos",
                description: "Implementa múltiples filtros que se apliquen automáticamente a un dataset.",
                difficulty: "Avanzado",
                points: 20
            }
        ],
        quiz: [
            {
                question: "¿Qué decorador se usa para crear UI condicional en Shiny?",
                options: ["@render.ui", "@reactive.ui", "@conditional.ui", "@dynamic.ui"],
                correct: 0
            },
            {
                question: "¿Cómo se ejecuta código solo cuando ocurre un evento específico?",
                options: ["@reactive.Effect", "@reactive.event", "Ambas A y B", "@event.handler"],
                correct: 2
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">🔄 Control de Flujo Reactivo</h4>
                <p class="theme-text-secondary mb-4">Aprende a crear interfaces dinámicas y lógica condicional en Shiny. El control de flujo reactivo permite que tu app responda inteligentemente a las interacciones del usuario.</p>
                
                <div class="mb-6">
                    <a href="https://shinylive.io/py/examples/" target="_blank" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Ejemplos Control de Flujo
                    </a>
                    <p class="text-sm theme-text-secondary mt-2">Se abrirá en una nueva ventana</p>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🎯 UI Condicional Dinámico</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <p class="text-sm theme-text-secondary mb-3">Interfaz que cambia según las selecciones del usuario:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import plotly.express as px

ui.input_select("chart_type", "Tipo de gráfico:",
               choices={"scatter": "Dispersión", "line": "Línea", "bar": "Barras"})

@render.ui
def dynamic_controls():
    if input.chart_type() == "scatter":
        return [
            ui.input_select("x_var", "Eje X:", choices=["sepal_length", "sepal_width"]),
            ui.input_select("y_var", "Eje Y:", choices=["petal_length", "petal_width"]),
            ui.input_select("color", "Color por:", choices=["species", "None"])
        ]
    elif input.chart_type() == "line":
        return [
            ui.input_checkbox("smooth", "Línea suavizada", value=True),
            ui.input_slider("alpha", "Transparencia:", min=0.1, max=1.0, value=0.8)
        ]
    else:  # bar chart
        return [
            ui.input_radio_buttons("orientation", "Orientación:",
                                 choices={"v": "Vertical", "h": "Horizontal"})
        ]</code></pre>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎛️ UI Condicional</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>@render.ui</code> - Interfaz dinámica</li>
                            <li>• Controles que aparecen/desaparecen</li>
                            <li>• Validación de inputs en tiempo real</li>
                            <li>• Mensajes contextuales</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">⚡ Manejo de Eventos</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>@reactive.event</code> - Eventos específicos</li>
                            <li>• <code>input_action_button</code> - Botones de acción</li>
                            <li>• Control granular de actualizaciones</li>
                            <li>• Estados reactivos complejos</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔄 Valores Reactivos</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>@reactive.Value</code> - Estados persistentes</li>
                            <li>• <code>@reactive.Calc</code> - Cálculos derivados</li>
                            <li>• Invalidación automática</li>
                            <li>• Dependencias implícitas</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🎮 Casos de Uso</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• Filtros cascada (país → ciudad)</li>
                            <li>• Configuración por pasos</li>
                            <li>• Validación de formularios</li>
                            <li>• Estados de carga/procesamiento</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    
    "data-structures": {
        title: "5. Manejo de Datos en Shiny",
        description: "Estructuras de datos y su visualización",
        video: "https://www.youtube.com/embed/HgbNNgWy7P8",
        additionalVideos: [
            { title: "Pandas Integration with Shiny", url: "https://www.youtube.com/embed/VtchVpoSdoQ" },
            { title: "Data Tables in Shiny", url: "https://www.youtube.com/embed/dAkbbEnFgHs" },
            { title: "JSON and API Data Handling", url: "https://www.youtube.com/embed/9uKhJg_l5jU" },
            { title: "Real-time Data Streaming", url: "https://www.youtube.com/embed/B4C_ksqM5eI" }
        ],
        content: `
            <h2 class="text-2xl font-bold theme-text-primary mb-4">Estructuras de Datos en Shiny</h2>
            <p class="theme-text-secondary mb-4">Shiny for Python trabaja seamlessly con pandas DataFrames, listas, diccionarios y otras estructuras de datos de Python.</p>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">DataFrames y Tablas</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    import pandas as pd<br>
                    from shiny import render<br><br>
                    @render.data_frame<br>
                    def data_table():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;df = pd.read_csv('datos.csv')<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return df.head(100)  # Muestra primeras 100 filas
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">Datos Reactivos</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                <code class="text-sm">
                    from shiny import reactive<br><br>
                    @reactive.Calc<br>
                    def processed_data():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;raw_data = get_raw_data()<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;filtered = raw_data[raw_data['category'] == input.category()]<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return filtered.groupby('date').sum()
                </code>
            </div>
            
            <h3 class="text-xl font-semibold theme-text-primary mb-3">APIs y JSON</h3>
            <div class="p-4 theme-bg-tertiary rounded-lg">
                <code class="text-sm">
                    import requests<br>
                    import json<br><br>
                    @reactive.Calc<br>
                    def api_data():<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;response = requests.get(f"https://api.ejemplo.com/data/{input.id()}")<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;return pd.DataFrame(response.json())
                </code>
            </div>
        `,
        colabContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Estructuras de Datos</h4>
                <p class="theme-text-secondary mb-4">Practica el manejo de diferentes estructuras de datos en contexto de Shiny.</p>
                
                <div class="mb-6">
                    <button onclick="window.open('https://colab.research.google.com/', '_blank')" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fab fa-google mr-2"></i>Practicar en Google Colab
                    </button>
                </div>
            </div>
        `,
        exercises: [
            {
                id: 1,
                title: "Tabla Interactiva",
                description: "Crea una tabla de datos con filtros y ordenamiento.",
                difficulty: "Intermedio",
                points: 15
            },
            {
                id: 2,
                title: "Dashboard de APIs",
                description: "Construye un dashboard que consuma datos de una API en tiempo real.",
                difficulty: "Avanzado",
                points: 25
            }
        ],
        quiz: [
            {
                question: "¿Qué decorador se usa para renderizar DataFrames en Shiny?",
                options: ["@render.table", "@render.data_frame", "@render.dataframe", "@render.df"],
                correct: 1
            },
            {
                question: "¿Cómo se hace reactivo el procesamiento de datos?",
                options: ["@reactive.Data", "@reactive.Calc", "@reactive.Process", "@data.reactive"],
                correct: 1
            }
        ],
        shinyliveContent: `
            <div class="mb-6">
                <h4 class="text-lg font-semibold theme-text-primary mb-3">📊 Manejo de Datos con Pandas</h4>
                <p class="theme-text-secondary mb-4">Aprende a integrar pandas DataFrames con Shiny para crear aplicaciones de análisis de datos interactivas y poderosas.</p>
                
                <div class="mb-6">
                    <a href="https://shinylive.io/py/examples/" target="_blank" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        <i class="fas fa-external-link-alt mr-2"></i>Ejemplos con Datos
                    </a>
                    <p class="text-sm theme-text-secondary mt-2">Se abrirá en una nueva ventana</p>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">🗂️ Explorador de Datos Interactivo</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <p class="text-sm theme-text-secondary mb-3">Dashboard completo para exploración de datos:</p>
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import pandas as pd
import plotly.express as px

# Cargar datos
tips = px.data.tips()
iris = px.data.iris()
flights = px.data.flights()

datasets = {"tips": tips, "iris": iris, "flights": flights}

ui.input_select("dataset", "Seleccionar Dataset:", 
               choices=list(datasets.keys()))
ui.input_select("filter_col", "Filtrar por columna:", choices=[])
ui.input_text("filter_value", "Valor del filtro:", "")

@render.ui
def update_filter_options():
    df = datasets[input.dataset()]
    return ui.input_select("filter_col", "Filtrar por columna:",
                          choices=df.columns.tolist())

@render.data_frame
def data_table():
    df = datasets[input.dataset()]
    
    if input.filter_value() and input.filter_col():
        df = df[df[input.filter_col()].astype(str).str.contains(
            input.filter_value(), case=False, na=False)]
    
    return df

@render.plot
def summary_plot():
    df = datasets[input.dataset()]
    numeric_cols = df.select_dtypes(include=['number']).columns
    
    if len(numeric_cols) >= 2:
        return px.scatter(df, x=numeric_cols[0], y=numeric_cols[1],
                         title=f"Scatter plot: {input.dataset()}")
    return px.histogram(df, x=numeric_cols[0] if len(numeric_cols) > 0 else df.columns[0])</code></pre>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h5 class="font-semibold theme-text-primary mb-3">📈 Dashboard de Análisis en Tiempo Real</h5>
                    <div class="p-4 theme-bg-tertiary rounded-lg mb-4">
                        <pre class="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto"><code>from shiny.express import input, render, ui
import pandas as pd
import numpy as np
import plotly.express as px
from datetime import datetime, timedelta

# Simulador de datos en tiempo real
@reactive.Value
def live_data():
    return pd.DataFrame()

@reactive.Effect
def update_data():
    # Simular datos que llegan cada segundo
    invalidate_later(1)  # Actualizar cada segundo
    
    new_row = pd.DataFrame({
        'timestamp': [datetime.now()],
        'value': [np.random.randn()],
        'category': [np.random.choice(['A', 'B', 'C'])]
    })
    
    current_data = live_data()
    updated_data = pd.concat([current_data, new_row]).tail(100)  # Mantener últimas 100 filas
    live_data.set(updated_data)

ui.input_numeric("window_size", "Ventana de tiempo (segundos):", 
                value=30, min=10, max=300)

@render.plot
def realtime_plot():
    data = live_data()
    if len(data) > 0:
        # Filtrar por ventana de tiempo
        cutoff = datetime.now() - timedelta(seconds=input.window_size())
        recent_data = data[data['timestamp'] > cutoff]
        
        return px.line(recent_data, x='timestamp', y='value', 
                      color='category', title="Datos en Tiempo Real")
    return px.line()

@render.text
def stats():
    data = live_data()
    if len(data) > 0:
        return f"Registros: {len(data)}, Último: {data['value'].iloc[-1]:.3f}"
    return "Esperando datos..."</code></pre>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📊 DataFrames Reactivos</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• <code>@render.data_frame</code> - Tablas interactivas</li>
                            <li>• Filtrado y ordenamiento automático</li>
                            <li>• Paginación incorporada</li>
                            <li>• Selección de filas/columnas</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">🔄 Datos Dinámicos</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• Carga desde archivos CSV/Excel</li>
                            <li>• APIs REST y bases de datos</li>
                            <li>• Streaming de datos en tiempo real</li>
                            <li>• Caching inteligente con <code>@reactive.Calc</code></li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">📈 Visualización Integrada</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• Plotly Express para gráficos interactivos</li>
                            <li>• Matplotlib/Seaborn para análisis estático</li>
                            <li>• Altair para gramática de gráficos</li>
                            <li>• Bokeh para visualizaciones web</li>
                        </ul>
                    </div>
                    <div class="p-4 theme-bg-tertiary rounded-lg">
                        <h5 class="font-semibold theme-text-primary mb-2">⚡ Optimización</h5>
                        <ul class="text-sm theme-text-secondary space-y-1">
                            <li>• Lazy loading para datasets grandes</li>
                            <li>• Chunking para procesamiento por lotes</li>
                            <li>• Memoización de cálculos costosos</li>
                            <li>• Invalidación selectiva</li>
                        </ul>
                    </div>
                </div>
                
                <div class="p-4 theme-bg-tertiary rounded-lg">
                    <h5 class="font-semibold theme-text-primary mb-2">💡 Aplicaciones Reales:</h5>
                    <ul class="text-sm theme-text-secondary space-y-1">
                        <li>• <strong>Financial Dashboard:</strong> Análisis de mercados con datos de Yahoo Finance</li>
                        <li>• <strong>IoT Monitor:</strong> Visualización de sensores en tiempo real</li>
                        <li>• <strong>Sales Analytics:</strong> KPIs de ventas con filtros por región/tiempo</li>
                        <li>• <strong>Scientific Explorer:</strong> Análisis interactivo de experimentos</li>
                    </ul>
                </div>
            </div>
        `
    }
};
export const blogData = [
    {
        id: 1,
        img: "/assets/images/blogs/blog-01/details.jpg",
        autor: "Brayan Joya",
        date: "26 Feb 2023",
        commentsCount: 9,
        viewCount: 35,
        title: "Las mejores herramientas de gestión integradas con IA",
        description: "Descubre como mejorar la gestión de tus proyectos con herramientas de inteligencia artificial.",
        labels: ["IA", "Gestión", "Productividad"],
        content: `
                    <div>
                      <p>
                        En el dinámico mundo empresarial de hoy, la gestión de proyectos se enfrenta a desafíos cada vez más complejos. La necesidad de agilidad, precisión y adaptabilidad es más crítica que nunca. Aquí es donde la inteligencia artificial (IA) entra en juego, ofreciendo soluciones innovadoras que revolucionan la forma en que abordamos la gestión de proyectos. Con herramientas de gestión integradas con IA, las empresas ahora tienen el poder de transformar sus procesos, haciéndolos más eficientes y efectivos.
                      </p>
                      <p>
                        La adopción de estas herramientas de IA no es simplemente una cuestión de mantenerse al día con la tecnología; es una estrategia esencial para sobresalir en un mercado competitivo. Estas herramientas proporcionan análisis avanzados, automatización de tareas repetitivas y capacidades predictivas que mejoran significativamente la toma de decisiones. El resultado es una gestión de proyectos más ágil, con un enfoque proactivo en lugar de reactivo.
                      </p>
                      <h3>
                        El Poder de la IA en la Gestión de Proyectos
                      </h3>
                      <p>
                        La integración de la IA en las herramientas de gestión ha abierto un nuevo mundo de posibilidades. Estas herramientas no solo simplifican y aceleran los procesos existentes, sino que también proporcionan insights valiosos que antes eran imposibles de obtener. Desde la asignación de recursos hasta el seguimiento del progreso y la evaluación de riesgos, la IA está equipando a los gerentes de proyectos con capacidades superiores para manejar proyectos de cualquier envergadura.
                      </p>
                      <h3>
                        Transformando la Toma de Decisiones con Datos
                      </h3>
                      <p>
                        Otra revolución traída por la IA es en la toma de decisiones basada en datos. Con acceso a análisis en tiempo real y predicciones precisas, los gerentes pueden tomar decisiones informadas que no solo resuelven problemas actuales sino que también anticipan desafíos futuros. Esto no solo mejora la eficiencia operativa sino que también aumenta las probabilidades de éxito del proyecto.
                      </p>
                      
                      <div style="position: relative; z-index: 10; margin-bottom: 10px; overflow: hidden; border-radius: 5px; background-color: rgba(39, 60, 117, 0.05); padding: 8px 6px; text-align: center; padding-left: 60px; padding-right: 60px;">
                        <div style="margin-left: auto; margin-right: auto; max-width: 530px;">
                          <span style="margin-bottom: 14px; display: flex; justify-content: center; color: #3056D3;">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;">
                              <path d="M13.7995 35.5781C12.937 35.5781 12.1464 35.075 11.8589 34.2844L9.48702 28.5344C6.82765 28.1031 4.45577 26.7375 2.9464 24.6531C1.36515 22.5687 0.862021 19.9812 1.5089 17.4656C2.51515 13.3687 6.75577 10.2781 11.4276 10.35C14.7339 10.4219 17.4651 11.7875 19.262 14.2312C20.987 16.675 21.4183 19.9812 20.412 23C19.4776 25.7312 18.2558 28.4625 17.1058 31.1219C16.6745 32.2 16.1714 33.2781 15.7401 34.2844C15.4526 35.075 14.662 35.5781 13.7995 35.5781ZM11.2839 13.5844C8.1214 13.5844 5.2464 15.5969 4.59952 18.2562C4.24015 19.8375 4.52765 21.4187 5.5339 22.7125C6.6839 24.2937 8.62452 25.3 10.7089 25.4437L11.7151 25.5156L13.7995 30.5469C13.8714 30.3312 14.0151 30.0437 14.087 29.8281C15.237 27.2406 16.387 24.5812 17.2495 21.9219C17.9683 19.9094 17.6808 17.6812 16.5308 16.1C15.3808 14.5187 13.5839 13.6562 11.3558 13.5844C11.3558 13.5844 11.3558 13.5844 11.2839 13.5844Z" />
                              <path d="M37.5905 35.65C36.728 35.65 35.9374 35.1469 35.6499 34.3563L33.278 28.6063C30.6187 28.175 28.2468 26.8094 26.7374 24.725C25.1562 22.6406 24.653 20.0531 25.2999 17.5375C26.3062 13.4406 30.5468 10.35 35.2187 10.4219C38.5249 10.4938 41.2562 11.8594 42.9812 14.3031C44.7062 16.7469 45.1374 20.0531 44.1312 23.0719C43.1968 25.8031 41.9749 28.5344 40.8249 31.1938C40.3937 32.2719 39.8905 33.35 39.4593 34.3563C39.2437 35.1469 38.453 35.65 37.5905 35.65ZM35.0749 13.5844C31.9124 13.5844 29.0374 15.5969 28.3905 18.2563C28.0312 19.8375 28.3187 21.4188 29.3249 22.7844C30.4749 24.3656 32.4155 25.3719 34.4999 25.5156L35.5062 25.5875L37.5905 30.6188C37.6624 30.4031 37.8062 30.1156 37.878 29.9C39.028 27.3125 40.178 24.6531 41.0405 21.9938C41.7593 19.9813 41.4718 17.7531 40.3218 16.1C39.1718 14.5188 37.3749 13.6563 35.1468 13.5844C35.1468 13.5844 35.1468 13.5844 35.0749 13.5844Z" />
                            </svg>
                          </span>
                          <p style="margin-bottom: 18px; font-size: 16px; font-style: italic; line-height: 28px; color: #333;">
                            La inteligencia artificial es una herramienta, no una amenaza. Cuando se combina con la imaginación humana, tiene el poder de elevar nuestra capacidad para resolver problemas y descubrir nuevas fronteras en todas las disciplinas y sectores.
                          </p>
                          <span style="font-size: 12px; font-style: italic; color: #6c757d;">
                            “Satya Nadella”
                          </span>
                        </div>
                        <div>
                          <span style="position: absolute; top: 0; left: 0;">
                            <svg width="103" height="109" viewBox="0 0 103 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="0.483916" cy="3.5" rx="102.075" ry="105.5" transform="rotate(180 0.483916 3.5)" fill="url(#paint0_linear_2014_9016)" />
                              <defs>
                                <linearGradient id="paint0_linear_2014_9016" x1="-101.591" y1="-50.4346" x2="49.1618" y2="-49.6518" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#3056D3" stop-opacity="0.15" />
                                  <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                          <span style="position: absolute; bottom: 0; right: 0;">
                            <svg width="102" height="106" viewBox="0 0 102 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="102.484" cy="105.5" rx="102.075" ry="105.5" fill="url(#paint0_linear_2014_9017)" />
                              <defs>
                                <linearGradient id="paint0_linear_2014_9017" x1="0.409163" y1="51.5654" x2="151.162" y2="52.3482" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#3056D3" stop-opacity="0.15" />
                                  <stop offset="1" stop-color="white" stop-opacity="0" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </span>
                        </div>
                      </div>


                      <h3>
                        Impacto en la Eficiencia y Productividad
                      </h3>

                      <p>
                        El uso de herramientas de IA en la gestión de proyectos no solo se trata de automatizar tareas; se trata de hacerlas más inteligentes. La IA puede priorizar tareas, identificar áreas clave de enfoque y sugerir los mejores métodos para alcanzar los objetivos del proyecto. Esto significa que los equipos pueden trabajar de manera más eficiente, concentrándose en lo que realmente importa y dejando que la IA maneje la logística compleja.
                      </p>

                      <h3>
                        Hacia un Futuro Guiado por la Inteligencia Artificial
                      </h3>
                      <p>
                        En conclusión, las herramientas de gestión integradas con IA no son solo una mejora incremental en la gestión de proyectos; representan un cambio paradigmático. Proporcionan un nivel de insight, eficiencia y adaptabilidad que redefine lo que es posible en la gestión de proyectos. En Elipson, estamos comprometidos con la integración de estas tecnologías avanzadas, ayudando a las empresas a navegar en un mundo cada vez más complejo y a estar un paso adelante en la carrera hacia el éxito.
                      </p>
                  </div>
                `
    }   
]
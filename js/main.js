 // Datos de ejemplo
 const data = [
    { ventas: 10000, gastos: 4000, aprobado: 1 },
    { ventas: 5000, gastos: 4500, aprobado: 0 },
    { ventas: 12000, gastos: 3000, aprobado: 1 },
    { ventas: 6000, gastos: 5000, aprobado: 0 },
    { ventas: 15000, gastos: 2000, aprobado: 1 },
    { ventas: 8000, gastos: 7000, aprobado: 0 },
    { ventas: 9000, gastos: 3000, aprobado: 1 },
    { ventas: 7000, gastos: 6000, aprobado: 0 },
    { ventas: 11000, gastos: 4000, aprobado: 1 },
    { ventas: 4000, gastos: 3500, aprobado: 0 },
    { ventas: 13000, gastos: 2500, aprobado: 1 },
    { ventas: 10000, gastos: 8500, aprobado: 0 },
    { ventas: 14000, gastos: 2000, aprobado: 1 },
    { ventas: 7500, gastos: 6500, aprobado: 0 },
    { ventas: 16000, gastos: 5000, aprobado: 1 },
    { ventas: 8500, gastos: 8000, aprobado: 0 },
    { ventas: 17500, gastos: 3000, aprobado: 1 },
    { ventas: 9500, gastos: 9000, aprobado: 0 },
    { ventas: 18000, gastos: 2500, aprobado: 1 },
    { ventas: 10500, gastos: 9500, aprobado: 0 },
    { ventas: 19000, gastos: 2000, aprobado: 1 },
    { ventas: 11500, gastos: 10000, aprobado: 0 },
    { ventas: 20000, gastos: 3000, aprobado: 1 },
    { ventas: 12500, gastos: 10500, aprobado: 0 },
    { ventas: 21000, gastos: 2500, aprobado: 1 },
    { ventas: 13500, gastos: 11000, aprobado: 0 },
    { ventas: 22000, gastos: 1500, aprobado: 1 },
    { ventas: 14500, gastos: 12000, aprobado: 0 },
    { ventas: 23000, gastos: 1000, aprobado: 1 },
    { ventas: 15500, gastos: 13000, aprobado: 0 },
    { ventas: 24000, gastos: 3000, aprobado: 1 },
    { ventas: 16500, gastos: 14000, aprobado: 0 },
    { ventas: 25000, gastos: 2000, aprobado: 1 },
    { ventas: 17500, gastos: 15000, aprobado: 0 },
    { ventas: 26000, gastos: 1000, aprobado: 1 },
    { ventas: 18500, gastos: 16000, aprobado: 0 },
    { ventas: 27000, gastos: 4000, aprobado: 1 },
    { ventas: 19500, gastos: 17000, aprobado: 0 },
    { ventas: 28000, gastos: 3000, aprobado: 1 },
    { ventas: 20500, gastos: 18000, aprobado: 0 },
    { ventas: 29000, gastos: 2000, aprobado: 1 },
    { ventas: 21500, gastos: 19000, aprobado: 0 },
    { ventas: 30000, gastos: 1000, aprobado: 1 },
    { ventas: 22500, gastos: 20000, aprobado: 0 },
    { ventas: 31000, gastos: 5000, aprobado: 1 },
    { ventas: 23500, gastos: 21000, aprobado: 0 },
    { ventas: 32000, gastos: 4000, aprobado: 1 },
    { ventas: 24500, gastos: 22000, aprobado: 0 },
    { ventas: 33000, gastos: 3000, aprobado: 1 },
    { ventas: 25500, gastos: 23000, aprobado: 0 },
    { ventas: 34000, gastos: 2000, aprobado: 1 },
    { ventas: 26500, gastos: 24000, aprobado: 0 },
    { ventas: 35000, gastos: 1000, aprobado: 1 },
    { ventas: 27500, gastos: 25000, aprobado: 0 },
    { ventas: 36000, gastos: 5000, aprobado: 1 },
    { ventas: 28500, gastos: 26000, aprobado: 0 },
    { ventas: 37000, gastos: 4000, aprobado: 1 },
    { ventas: 29500, gastos: 27000, aprobado: 0 },
    { ventas: 38000, gastos: 3000, aprobado: 1 },
    { ventas: 30500, gastos: 28000, aprobado: 0 },
    { ventas: 39000, gastos: 2000, aprobado: 1 },
    { ventas: 31500, gastos: 29000, aprobado: 0 },
    { ventas: 40000, gastos: 1000, aprobado: 1 },
    { ventas: 32500, gastos: 30000, aprobado: 0 },
    { ventas: 41000, gastos: 5000, aprobado: 1 },
    { ventas: 33500, gastos: 31000, aprobado: 0 },
    { ventas: 42000, gastos: 4000, aprobado: 1 },
    { ventas: 34500, gastos: 32000, aprobado: 0 },
    { ventas: 43000, gastos: 3000, aprobado: 1 },
    { ventas: 35500, gastos: 33000, aprobado: 0 },
    { ventas: 44000, gastos: 2000, aprobado: 1 },
    { ventas: 36500, gastos: 34000, aprobado: 0 },
    { ventas: 45000, gastos: 1000, aprobado: 1 },
    { ventas: 37500, gastos: 35000, aprobado: 0 },
    { ventas: 46000, gastos: 5000, aprobado: 1 },
    { ventas: 38500, gastos: 36000, aprobado: 0 },
    { ventas: 47000, gastos: 4000, aprobado: 1 },
    { ventas: 39500, gastos: 37000, aprobado: 0 },
    { ventas: 48000, gastos: 3000, aprobado: 1 },
    { ventas: 40500, gastos: 38000, aprobado: 0 },
    { ventas: 49000, gastos: 2000, aprobado: 1 },
    { ventas: 41500, gastos: 39000, aprobado: 0 },
    { ventas: 50000, gastos: 1000, aprobado: 1 },
    { ventas: 42500, gastos: 40000, aprobado: 0 },
    { ventas: 51000, gastos: 5000, aprobado: 1 },
    { ventas: 43500, gastos: 41000, aprobado: 0 },
    { ventas: 52000, gastos: 4000, aprobado: 1 },
    { ventas: 44500, gastos: 42000, aprobado: 0 },
    { ventas: 53000, gastos: 3000, aprobado: 1 },
    { ventas: 45500, gastos: 43000, aprobado: 0 },
    { ventas: 54000, gastos: 2000, aprobado: 1 },
    { ventas: 46500, gastos: 44000, aprobado: 0 },
    { ventas: 55000, gastos: 1000, aprobado: 1 },
    { ventas: 47500, gastos: 45000, aprobado: 0 }
  ];

  // Convertir los datos a utilidad y crear tensores
  const utilidades = data.map(d => d.ventas - d.gastos);
  const aprobados = data.map(d => d.aprobado);

  const xs = tf.tensor2d(utilidades, [utilidades.length, 1]);
  const ys = tf.tensor2d(aprobados, [aprobados.length, 1]);

  // Definir el modelo
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1], activation: 'sigmoid' }));

  // Compilar el modelo
  model.compile({
    optimizer: tf.train.adam(),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });

  // Entrenar el modelo
  async function trainModel() {
    await model.fit(xs, ys, {
      epochs: 100,
      callbacks: tf.callbacks.earlyStopping({ monitor: 'loss' })
    });
    console.log('Entrenamiento completado');
  }

  trainModel();

  // Hacer predicciones
  async function predictApproval(ventas, gastos) {
    const utilidad = ventas - gastos;
    const prediction = model.predict(tf.tensor2d([utilidad], [1, 1]));
    const result = await prediction.data();
    return result[0]; // Devuelve la probabilidad de aprobación
  }

   // Función para actualizar la predicción cuando se cambian los valores
   async function updatePrediction() {
    const ventas = parseFloat(document.getElementById('ventas').value);
    const gastos = parseFloat(document.getElementById('gastos').value);
    const resultado = await predictApproval(ventas, gastos);
    document.getElementById('resultado').innerText = `Probabilidad de aprobación del crédito: ${resultado.toFixed(2)}`;
  }

  // Manejar el formulario
  document.getElementById('creditoForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const ventas = parseFloat(document.getElementById('ventas').value);
    const gastos = parseFloat(document.getElementById('gastos').value);
    const resultado = await predictApproval(ventas, gastos);
    document.getElementById('resultado').innerText = `Probabilidad de aprobación del crédito: ${resultado.toFixed(2)}`;
  });
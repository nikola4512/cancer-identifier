const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    let result, suggestion;

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    confidenceScore > 50 ? (result = "Cancer") : (result = "Non-cancer");

    if (result === "Cancer") {
      suggestion = "Segera konsultasi dengan dokter terdekat.";
    }

    if (result === "Non-cancer") {
      suggestion = "Kondisi anda aman.";
    }

    return { result, suggestion };
  } catch (error) {
    throw new InputError(`Terjadi kesalahan input: ${error.message}`);
  }
}

module.exports = predictClassification;

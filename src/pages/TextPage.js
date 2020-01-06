import React, { useEffect, useState } from "react";
import axios from "axios";
// import { vocab, char2idx, idx2char } from "../data/textmodel.js";
// import * as tf from "@tensorflow/tfjs";

// const load = async () => {
//   const model = await tf.loadLayersModel(
//     "https://mymodelapi.herokuapp.com/model.json"
//   );
//   console.log(model);
//   return model;
// };

export default function TextPage() {
  const [model, setModel] = useState(null);
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState("");
  useEffect(() => {
    // tf.loadLayersModel("https://mymodelapi.herokuapp.com/model.json")
    //   .then(model => setModel(model))
    //   .catch(err => console.error(err));
  }, []);

  function onClickHandler() {
    axios
      .get(`http://mymodelapi.herokuapp.com/predict-text?start-string=${text}`)
      .then(res => setPrediction(res.data.random_text))
      .catch(err => console.error(err));
  }

  // function onClickHandler(model, start_string) {
  //   // Evaluation step (generating text using the learned model)

  //   // Number of characters to generate
  //   const num_generate = 1000;

  //   // Converting our start string to numbers (vectorizing)
  //   let input_eval = start_string.split("").map(s => {
  //     return char2idx[s];
  //   });
  //   input_eval = tf.tensor(input_eval).expandDims(0);
  //   // input_eval = tf.expand_dims(input_eval, 0);

  //   // Empty string to store our results
  //   let text_generated = [];

  //   // # Low temperatures results in more predictable text.
  //   // # Higher temperatures results in more surprising text.
  //   // # Experiment to find the best setting.
  //   const temperature = 1.0;
  //   let predictions;
  //   // # Here batch size == 1
  //   model.resetStates();
  //   for (let i = 0; i < num_generate.length; i++) {
  //     predictions = model(input_eval);
  //     // # remove the batch dimension
  //     predictions = predictions.squeeze(0);
  //   }

  //   // # using a categorical distribution to predict the word returned by the model
  //   // predictions = predictions / temperature
  //   // let predicted_id = tf.random
  //   //   .categorical(predictions, (num_samples = 1))
  //   //   [(-1, 0)].numpy();
  //   tf.multinomial(predictions, 1);
  //   // predicted_id = predicted_id.dataSync()[0];
  //   // # We pass the predicted word as the next input to the model
  //   // # along with the previous hidden state
  //   // input_eval = tf.expand_dims([predicted_id], 0);

  //   // text_generated.push(idx2char[predicted_id]);

  //   return start_string + text_generated.join("");
  // }

  return (
    <div>
      <button
        onClick={
          onClickHandler
          // onClickHandler(model, text);
        }
      >
        click me
      </button>
      <input value={text} onChange={e => setText(e.target.value)}></input>
      {prediction.length > 0 && <div>{prediction}</div>}
    </div>
  );
}

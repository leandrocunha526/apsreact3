import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,

      phrase: [
        {
          frase:
            "Só existem dois motivos pra uma pessoa se preocupar com você: Ou ela te ama muito, ou tem algo que ela queira muito!",
          imagem:
            "https://static.frasesparaface.com.br/imagem/so/ex/so-existem-dois-motivos-pra-uma-pessoa-se.jpg",
        },
        {
          frase: "A vida acontece num equilíbrio entre a alegria e a dor",
          imagem:
            "https://static-cse.canva.com/blob/167970/Short-Quotes-BR-1.png",
        },
        {
          frase: "Procure a felicidade, não a opinião dos outros",
          imagem:
            "https://www.42frases.com.br/wp-content/uploads/2019/01/procure.png",
        },
        {
          frase:
            "O segredo da vida não é ter tudo que você quer, mas amar tudo que você tem!",
          imagem:
            "https://www.42frases.com.br/wp-content/uploads/2019/01/o-1.png",
        },
        {
          frase: "Enquanto Deus for meu chão, não há quem me derrube!",
          imagem:
            "https://cdn.pensador.com/img/imagens/en/qu/enquanto_deus_for_meu_chao_nao_ha_quem_me_derrube.jpg",
        },
        {
          frase:
            "O que você tem todo mundo pode ter, mas o que você é, ninguém pode ser",
          imagem:
            "https://www.frasesdobem.com.br/wp-content/uploads/2017/08/o-que-voce-tem-todo-mundo-pode-ter.jpg",
        },
      ],
    };
    this.getFrase = this.getFrase.bind(this);
  }
  getFrase() {
    console.log(this.state.position);
    this.setState({
      position: Math.floor(Math.random() * (this.state.phrase.length - 1)) + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.phrase[this.state.position].imagem }}
          style={{
            width: 400,
            height: 300,
          }}
        />
        <Text style={styles.texto}>
          {this.state.phrase[this.state.position].frase}
        </Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => this.getFrase()}
        >
          <Text style={[styles.textoButton]}>Abrir frase do dia</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textoButton: {
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    color: "#FA6C4E",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FA6C4E",
    width: 300,
    borderWidth: 3,
    borderRadius: 15,
  },
  texto: {
    marginTop: 3,
    marginBottom: 15,
    fontSize: 25,
    textAlign: "center",
    fontSize: 25,
    maxWidth: 300,
    color: "#FA6C4E",
  },
});

export default App;

import { negociacoesDoDia } from "../intenfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {
  obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: negociacoesDoDia[]) => {
        return dados.map((dadosDeHoje) => {
          return new Negociacao(
            new Date(),
            dadosDeHoje.vezes,
            dadosDeHoje.montante
          );
        });
      });
  }
}

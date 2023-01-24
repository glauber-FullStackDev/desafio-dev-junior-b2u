import * as S from "./styles";
import React, { useState } from "react";
import { ethers } from "ethers";

export const Metamask = () => {
  const [message, setMessage] = useState();
  const [address, setAddress] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [ethAmount2, setEthAmount2] = useState("");

  const loadData = async () => {
    try {
      if (!window.ethereum) {
        return setMessage(
          `Instale a Metamask no seu browser: https://metamask.io/download.html`
        );
      } else {
        setMessage("Conectando na metamask.......");

        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );

        await provider.send("eth_requestAccounts", []);

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const myBalance = await signer.getBalance();

        setAddress(address);
        setEthAmount(ethers.utils.formatEther(myBalance));
        setMessage("Conectado!");

        const BalanceJogo = await provider.getBalance(
          "0xAF82A7f247b1bb9F7018C6c3B1C583b668E0347C"
        );
        setEthAmount2(ethers.utils.formatEther(BalanceJogo.toString()));
      }
    } catch {
      setMessage("Erro ao conectar");
    }
  };

  async function transfer() {
    try {
      if (!window.ethereum) {
        return setMessage(
          `Instale a Metamask no seu browser: https://metamask.io/download.html`
        );
      } else {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const myBalance = await signer.getBalance();

        setAddress(address);
        setEthAmount(ethers.utils.formatEther(myBalance));
        await window.ethereum.send("eth_requestAccounts");

        ethers.utils.getAddress(address);
        const account = "0x31E442BA4d4a299013D05dD298e22d1FA928352A";
        const transaction = await signer.sendTransaction({
          to: account,
          value: ethers.utils.parseEther("0.000200"),
        });
      }
    } catch (e) {
      setAddress(address);
      if (!address) {
        return setMessage("Conecte na sua carteira");
      } else {
        setMessage("Sem Saldo");
      }
    }
  }

  return (
    <S.Container>
      <S.ContainerBox>
        <S.ContainerTitle>
          <S.Title> Conectar na matamask</S.Title>
          <p style={{ color: "yellow" }}>{JSON.stringify(message)}</p>
        </S.ContainerTitle>
        <S.Box>
          <h5>
            <p>Minha carteira</p>
            <di>{address}</di>
          </h5>
          <h4>
            <div>
              Saldo:<span>{ethAmount}</span>BNB
            </div>
          </h4>
        </S.Box>

        <S.ContainerButton>
          <button
            value="Conectar"
            onClick={(evt) => loadData()}
          >
            Conectar
          </button>
          <button
            value="transfer"
            onClick={(evt2) => transfer()}
          >
            Trasferir
          </button>
        </S.ContainerButton>

        <S.Box>
          <h5>
            <p>Hash da carteira de envio</p>
            <di>0x31E442BA4d4a299013D05dD298e22d1FA928352A</di>
          </h5>
          <h4>
            <div>
              Saldo:<span>{ethAmount2}</span>BNB
            </div>
          </h4>
        </S.Box>
      </S.ContainerBox>
    </S.Container>
  );
};

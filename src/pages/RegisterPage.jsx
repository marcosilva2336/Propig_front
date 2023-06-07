import React, { useState } from 'react';
import Swal from 'sweetalert2';
import registerPage from "../styles/registerPage.css";
import Logo from "../assets/logo.png";
import InputMask from 'react-input-mask';
import NavBarHomePage from "../components/NavBarHomePage";

function RegisterPage() {
  // Estados para os campos do formulário
  const [cnpj, setCnpj] = useState('');
  const [loja, setLoja] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Registrado!',
      text: 'Seu registro foi enviado com sucesso!',
      confirmButtonColor: '#0a2940',
    });
  };

  // Função para formatar o CNPJ
  const formatarCNPJ = (cnpj) => {
    cnpj = cnpj.replace(/\D/g, '');

    if (cnpj.length > 14) {
      cnpj = cnpj.slice(0, 14); // Limita a 14 dígitos
    }

    cnpj = cnpj.replace(/(\d{2})(\d)/, '$1.$2'); // Insere ponto após o segundo dígito
    cnpj = cnpj.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após o quinto dígito
    cnpj = cnpj.replace(/(\d{3})(\d)/, '$1/$2'); // Insere barra após o oitavo dígito
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2'); // Insere hífen após o 12º dígito

    return cnpj;
  };

  // Função para lidar com a mudança do CNPJ
  const handleCnpjChange = (event) => {
    const formattedCnpj = formatarCNPJ(event.target.value);
    setCnpj(formattedCnpj);
  };

  // Função para lidar com a mudança do CEP
  const handleCepChange = async (e) => {
    setCep(e.target.value);

    if (e.target.value.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${e.target.value}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
        setRua(data.logradouro);
      }
    }
  };

  return (
    <>
       <NavBarHomePage />
      <section className="container-register">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-register">
                <div>
                  <label htmlFor="fantasyname">Nome Fantasia</label>
                  <input
                    id="fantasyname"
                    type="text"
                    name="fantasyname"
                    placeholder="Nome da empresa"
                    required
                    value={loja}
                    onChange={(e) => setLoja(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="cnpj">CNPJ</label>
                  <input
                    id="cnpj"
                    type="text"
                    name="cnpj"
                    placeholder="CNPJ da empresa"
                    required
                    value={cnpj}
                    onChange={handleCnpjChange}
                  />
                </div>

                <div>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite o email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="number">Telefone/Celular</label>
                  <InputMask
                    id="number"
                    type="tel"
                    name="number"
                    placeholder="(XX) XXXXX - XXXX"
                    required
                    mask="(99) 99999-9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    name="cep"
                    placeholder="Digite o CEP"
                    required
                    value={cep}
                    onChange={handleCepChange}
                  />
                </div>

                <div>
                  <label htmlFor="rua">Rua</label>
                  <input
                    id="rua"
                    type="text"
                    name="rua"
                    placeholder="Rua"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)} required
                  />
                </div>

                <div>
                  <label htmlFor="bairro">Bairro</label>
                  <input
                    id="bairro"
                    type="text"
                    name="bairro"
                    placeholder="Bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)} required
                  />
                </div>

                <div>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    id="cidade"
                    type="text"
                    name="cidade"
                    placeholder="Cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)} required
                  />
                </div>

                <div>
                  <label htmlFor="estado">Estado</label>
                  <input
                    id="estado"
                    type="text"
                    name="estado"
                    placeholder="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)} required
                  />
                </div>

                <div>
                  <label htmlFor="complemento">Complemento</label>
                  <input
                    id="complemento"
                    type="text"
                    name="complemento"
                    placeholder="Complemento"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Digite a Senha"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="confirmpassword">Confirmar Senha</label>
                  <input
                    id="confirmpassword"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a Senha"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="register-button">
                <button type="submit">CADASTRAR</button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </>
  );
}

export default RegisterPage;

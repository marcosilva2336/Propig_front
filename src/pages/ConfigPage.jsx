import { useState } from 'react';
import configStyle from '../styles/configPageStyle.css'
import NavBarClient from '../components/NavBarClient'
import ProfileClient from '../assets/profileclient.jpeg'
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import CreateIcon from '@mui/icons-material/Create';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Swal from 'sweetalert2'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ConfgPage() {
    // Estado para armazenar o tema (light ou dark) do perfil do cliente
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    // Estado para armazenar o CNPJ do cliente
    const [cnpj, setCNPJ] = useState("");
    // Estado para armazenar uma mensagem de salvamento
    const [saveMessage, setSaveMessage] = useState("");

    // Função para alternar o tema entre light e dark
    const toggleMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire(
            'Salvo!',
            'Seus dados foram salvos com sucesso!',
            'success'
        )
    }

    // Função para formatar o CNPJ inserido pelo usuário
    const formatCNPJ = (value) => {
        return value
            .replace(/\D/g, '') // Remove caracteres não numéricos
            .replace(/(\d{2})(\d)/, '$1.$2') // Adiciona ponto após os primeiros dois dígitos
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após os próximos três dígitos
            .replace(/(\d{3})(\d)/, '$1/$2') // Adiciona barra após os próximos três dígitos
            .replace(/(\d{4})(\d{1,2})/, '$1-$2') // Adiciona traço após os próximos quatro dígitos
            .replace(/(-\d{2})\d+?$/, '$1') // Remove qualquer dígito além dos dois últimos com traço
    }

    // Função para lidar com a mudança do CNPJ no campo de input
    const handleCNPJChange = (e) => {
        setCNPJ(formatCNPJ(e.target.value))
    }

    // Estados para armazenar informações de endereço
    const [cep, setCep] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [rua, setRua] = useState("");

    // Função para lidar com a mudança do CEP no campo de input
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
    }

    // Função para lidar com o logout do usuário
    const handleLogout = () => {
        Swal.fire({
            title: 'Deseja fazer logout?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/";
            }
        });
    };

    return (
        <div>
            <Link to="/cliente"> <ArrowBackIcon /></Link>
            <div class="container-2" data-theme={theme}>
                <aside className='asise-2'>
                    <div>
                        <div class="logo">
                            <h2 class="text-muted">Cliente</h2>
                        </div>
                        <div class="close" id="close-btn"><span class="material-symbols-sharp">close</span>
                        </div>
                    </div>
                    <div class="sidebar">
                        <a onClick={toggleMode}>
                            <span className="material-symbols-sharp">
                                <TipsAndUpdatesSharpIcon />
                            </span>
                            <h3>Mudar tema</h3>
                        </a>
                        <Link to="/cliente">
                            <span class="material-symbols-sharp"> <ReceiptLongSharpIcon /> </span>
                            <h3>Pedidos</h3>
                        </Link>
                        <a href="configuracoes.html">
                            <span class="material-symbols-sharp"><AccountCircleSharpIcon />
                            </span>
                            <h3>Meu Perfil</h3>
                        </a>
                        <Link onClick={handleLogout}>
                            <span className="material-icons-sharp">
                                <LogoutSharpIcon />
                            </span>
                            <h3>Sair</h3>
                        </Link>
                    </div>
                </aside>
                <main class="config">
                    <div class="config-titulo">
                        <h2>Meu Perfil</h2>
                    </div>
                    <div className="config-conteudo">
                        <div class="img-container">
                            <div class="profile">
                                <div class="profile-picture">
                                    <img src={ProfileClient} id='profile-1' />
                                    <input type="profile" id="profile-1" />
                                </div>
                                <div id="edit">
                                    <label for="upload">
                                        <CreateIcon className='upload-icon' />
                                    </label>
                                    <input type="file" id="upload" class="file-input"></input>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <h2>Dados pessoais</h2>
                        </ul>
                        <div className="dados-pessoais">
                            <label style={{ order: 0 }} htmlFor="nome-da-empresa">Nome da empresa:</label>
                            <input style={{ order: 2 }} type="text" id="nome-da-empresa" name="nome-da-empresa" placeholder="Digite o nome da empresa:" />
                            <label style={{ order: 1 }} htmlFor="cnpj">CNPJ</label>
                            <input style={{ order: 3 }} type="text" id="cnpj" name="cnpj" placeholder="Digite o CNPJ:" value={cnpj} onChange={handleCNPJChange} />
                            <label style={{ order: 4 }} htmlFor="telefone">Telefone</label>
                            <input style={{ order: 6 }} type="text" id="telefone" name="telefone" placeholder="Digite o telefone:" />
                            <label style={{ order: 5 }} htmlFor="email">E-mail</label>
                            <input style={{ order: 7 }} type="text" id="email" name="email" placeholder="Digite o e-mail:" />
                        </div>
                        <div className="endereco">
                            <ul>
                                <h2>Endereços</h2>
                            </ul>
                            <label style={{ order: 0 }} htmlFor="endereco">CEP</label>
                            <input style={{ order: 2 }} type="text" id="endereco" name="endereco" placeholder="Digite o CEP:" value={cep} onChange={handleCepChange} />
                            <label style={{ order: 1 }} htmlFor="bairro">Bairro</label>
                            <input style={{ order: 3 }} id="bairro" type="text" name="bairro" placeholder="Digite o bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
                            <label style={{ order: 4 }} htmlFor="cidade">Cidade</label>
                            <input style={{ order: 6 }} id="cidade" type="text" name="cidade" placeholder="Digite a cidade:" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                            <label style={{ order: 5 }} htmlFor="estado">Estado</label>
                            <input style={{ order: 7 }} id="estado" type="text" name="estado" placeholder="Digite o Estado:" value={estado} onChange={(e) => setEstado(e.target.value)} required />
                            <label style={{ order: 8 }} htmlFor="rua">Rua</label>
                            <input style={{ order: 10 }} id="rua" type="text" name="rua" placeholder="Digite a rua:" value={rua} onChange={(e) => setRua(e.target.value)} required />
                            <label style={{ order: 9 }} htmlFor="complemento">Complemento</label>
                            <input style={{ order: 11 }} id="complemento" type="text" name="complemento" placeholder="Digite um complemento:" required />
                        </div>
                        <button type="submit" className="save-btn" onClick={handleSubmit}>Salvar</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ConfgPage

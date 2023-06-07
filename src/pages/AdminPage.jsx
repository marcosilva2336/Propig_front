
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import ProfileUm from "../assets/profile-1.jpg";
import ProfileDois from "../assets/profile-2.jpeg";
import ProfileTres from "../assets/profile-3.jpeg";
import ProfileQuatro from "../assets/profile-4.png";
import Logo from "../assets/logo.png";

import adminPageStyle from "../styles/adminPageStyle.css";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SellIcon from "@mui/icons-material/Sell";
import MovingIcon from "@mui/icons-material/Moving";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import ReportGmailerrorredSharpIcon from "@mui/icons-material/ReportGmailerrorredSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import TipsAndUpdatesSharpIcon from "@mui/icons-material/TipsAndUpdatesSharp";
import NavBarAdmin from "../components/NavBarAdmin";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from '@mui/icons-material/Menu';
import { ExitToApp } from "@mui/icons-material";
import Modal from 'react-modal';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';







function AdminPage() {
    const [dataHora, setDataHora] = useState(new Date());
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
    let [data, setData] = useState([
        {
            cliente: "Moura",
            rastreamento: "Aguardando Pagamento",
            pagamento: "Solicitado",
            status: "Pendente",
            data: "25/04/2023",
        },
        {
            cliente: "FICR",
            rastreamento: "Cancelado",
            pagamento: "Reembolso",
            status: "Cancelado",
            data: "25/04/2023",
        },

        {
            cliente: "ECCO",
            rastreamento: "8563223413",
            pagamento: "Pago",
            status: "Entregue",
            data: "25/04/2023",
        },
        {
            cliente: "Johnson & Sons",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Entregue",
            data: "25/04/2023",
        },

        {
            cliente: "Anderson Enterprises",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Entregue",
            data: "25/04/2023",
        },

        {
            cliente: "Smithson Corporation",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Entregue",
            data: "25/04/2023",
        },

        {
            cliente: "Thompson Industries",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Em trânsito",
            data: "25/04/2023",
        },

        {
            cliente: "Roberts & Co.",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Entregue",
            data: "25/04/2023",
        },

        {
            cliente: "Wilson Manufacturing",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Em trânsito",
            data: "25/04/2023",
        },

        {
            cliente: "Brownstone Holdings",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Entregue",
            data: "25/04/2023",
        },

        {
            cliente: "Parker Solutions",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Em trânsito",
            data: "25/04/2023",
        },

        {
            cliente: "Adams Group",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Em trânsito",
            data: "25/04/2023",
        },

        {
            cliente: "Turner Enterprises",
            rastreamento: "8563223416",
            pagamento: "Pago",
            status: "Em trânsito",
            data: "25/04/2023",
        },


    ]);

    const toggleMode = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const handleSendMessage = () => {
        Swal.fire({
            title: "Enviar Mensagem",
            input: "textarea",
            inputPlaceholder: "Digite sua mensagem...",
            showCancelButton: true,
            confirmButtonText: "Enviar",
            cancelButtonText: "Cancelar",
            showLoaderOnConfirm: true,
            preConfirm: (message) => {
                // Implemente sua lógica para enviar a mensagem aqui
                console.log("Mensagem enviada:", message);
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000); // Simulando o envio da mensagem com um atraso de 2 segundos
                });
            },
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: "success",
                        title: "Mensagem enviada com sucesso!",
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire({
                        icon: "error",
                        title: "Envio da mensagem cancelado",
                        text: "Você cancelou o envio da mensagem.",
                    });
                }
            })
    };
    const handleSendReport = () => {
        Swal.fire({
            title: "Enviar Relatório",
            input: "textarea",
            inputPlaceholder: "Digite o conteúdo do relatório...",
            showCancelButton: true,
            confirmButtonText: "Enviar",
            cancelButtonText: "Cancelar",
            showLoaderOnConfirm: true,
            preConfirm: (message) => {
                console.log("Relatório enviado:", message);
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000); // Simulando o envio do relatório com um atraso de 2 segundos
                });
            },
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: "success",
                        title: "Relatório enviado com sucesso!",
                        text: "O relatório foi enviado para análise.",
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire({
                        icon: "error",
                        title: "Envio do relatório cancelado",
                        text: "Você cancelou o envio do relatório.",
                    });
                }
            })
    };
    const [showAnalysis, setShowAnalysis] = useState(false);

    const handleShowAnalysis = (e) => {
        e.preventDefault();
        setShowAnalysis(true);
    };

    const graphData = [
        { month: 'Janeiro', Vendas: 4000, Redimentos: 2400, Entregas: 2400 },
        { month: 'Fevereiro', Vendas: 3000, Redimentos: 1398, Entregas: 2210 },
        { month: 'Março', Vendas: 2000, Redimentos: 9800, Entregas: 2290 },
        { month: 'Abril', Vendas: 2780, Redimentos: 3908, Entregas: 2000 },
        { month: 'Maio', Vendas: 1890, Redimentos: 4800, Entregas: 2181 },
        { month: 'Junho', Vendas: 2390, Redimentos: 3800, Entregas: 2500 },
        { month: 'Julho', Vendas: 3490, Redimentos: 4300, Entregas: 2100 },
        { month: 'Agosto', Vendas: 3490, Redimentos: 4300, Entregas: 2100 },
    ];


    const handleSelectOpcao = () => {
        Swal.fire({
            title: "Novo Pedido",
            html:
                '<input id="cliente" class="swal2-input" placeholder="Cliente" required>' +
                '<input id="rastreamento" class="swal2-input" placeholder="Rastreamento" required>' +
                '<input id="data" class="swal2-input" placeholder="Data" type="date" required>' +
                '<select id="status" class="swal2-select" required>' +
                '<option value="" selected disabled>Selecione o status</option>' +
                '<option value="Pendente">Pendente</option>' +
                '<option value="Caminho">Em trânsito</option>' +
                '<option value="Entregue">Entregue</option>' +
                '<option value="Cancelado">Cancelado</option>' +
                "</select>" +
                '<select id="pagamento" class="swal2-select" required>' +
                '<option value="" selected disabled>Selecione o pagamento</option>' +
                '<option value="Solicitado">Solicitado</option>' +
                '<option value="Pago">Pago</option>' +
                '<option value="Reembolso">Reembolso</option>' +
                "</select>",
            focusConfirm: false,
            showConfirmButton: true,
            showCancelButton: true,
            customClass: {
                input: "my-swal-input",
                confirmButton: "my-swal-confirm-button",
            },
            preConfirm: () => {
                var cliente = document.getElementById("cliente").value;
                var rastreamento = document.getElementById("rastreamento").value;
                var pagamento = document.getElementById("pagamento").value;
                var status = document.getElementById("status").value;
                var data = document.getElementById("data").value;

                if (!cliente || !rastreamento || !pagamento || !status || !data) {
                    Swal.showValidationMessage("Por favor, preencha todos os campos");
                } else {
                    const novoItem = {
                        cliente: cliente,
                        rastreamento: rastreamento,
                        pagamento: pagamento,
                        status: status,
                        data: data,
                    };
                    Swal.showLoading();
                    setTimeout(() => {
                        setData((prevData) => [...prevData, novoItem]);
                        Swal.fire({
                            icon: "success",
                            title: "Salvo!",
                            showConfirmButton: false,
                            timer: 1300,
                        });
                    }, 800);
                }
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    icon: "error",
                    title: "Cancelado!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };
    const showStatusPopup = (status) => {
        if (status === "Entregue") {
            Swal.fire({
                icon: 'success',
                title: 'Entregue com sucesso',
                text: 'O pedido foi entregue com sucesso.',
            });

        } else if (status === "Em trânsito") {
            Swal.fire({
                icon: 'warning',
                title: '',
                text: 'Sua maquineta está a caminho!',
            });

        } else if (status === "Pendente") {
            Swal.fire({
                icon: 'warning',
                title: 'Aguardando pagamento',
                text: 'O pedido está aguardando pagamento',
            });
        } else if (status === "Cancelado") {
            Swal.fire({
                icon: 'error',
                title: 'Reembolso em andamento',
                text: 'O reembolso está sendo processado para este pedido.',
            });
        }
    };

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

    const [modalIsOpen, setModalIsOpen] = useState(false);




    return (
        <section>
            <NavBarAdmin />
            <div className="container" data-theme={theme}>
                <aside>
                    <div className="top">
                        <div className="logo">
                            <h2 className="text-muted">ADM</h2>
                        </div>
                        <div className="close" id="close-btn"><span className="material-symbols-sharp">close</span></div>
                    </div>
                    <div className="sidebar">
                        <a className="toggle-button" onClick={toggleMode}>
                            <span className="material-symbols-sharp"><TipsAndUpdatesSharpIcon /></span>
                            <h3>Mudar tema</h3>
                        </a>
                        <a href="" className="active">
                            <span className="material-symbols-sharp"><PersonOutlineIcon /></span>
                            <h3>Clientes</h3>
                        </a>
                        <a href="#" onClick={() => setModalIsOpen(true)}>
                            <span className="material-symbols-sharp">
                                <ReceiptLongSharpIcon />
                            </span>
                            <h3>Pedidos</h3>
                        </a>

                        {/* Modal de Pedidos */}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            className="modal-container"
                        >
                            <h2 className="modal-title">Pedidos</h2>
                            <table className="modal-table">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Cliente</th>
                                        <th>Rastreamento</th>
                                        <th>Pagamento</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((pedido, index) => (
                                        <tr key={index} className="table-row">
                                            <td>{pedido.data}</td>
                                            <td>{pedido.cliente}</td>
                                            <td>{pedido.rastreamento}</td>
                                            <td>{pedido.pagamento}</td>
                                            <td>{pedido.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button className="modal-button" onClick={() => setModalIsOpen(false)}>Fechar</button>
                        </Modal>

                        <a href="#" onClick={handleShowAnalysis}>
                            <span className="material-symbols-sharp"><InsightsSharpIcon /></span>
                            <h3>Análises</h3>
                        </a>
                        <Modal
                            isOpen={showAnalysis}
                            onRequestClose={() => setShowAnalysis(false)}
                            contentLabel="Análises"
                            className="analysis-modal"
                        >
                            <h2>Análises</h2>
                            <LineChart width={1000} height={450} data={graphData}>
                                <Line type="monotone" dataKey="Vendas" stroke="#8884d8" />
                                <Line type="monotone" dataKey="Redimentos" stroke="#82ca9d" />
                                <Line type="monotone" dataKey="Entregas" stroke="#ffc658" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                            <button className="analysis-button" onClick={() => setShowAnalysis(false)}>Fechar</button>
                        </Modal>

                        <a href="#" onClick={handleSendMessage}>
                            <span className="material-symbols-sharp"><MailOutlineSharpIcon /></span>
                            <h3>Mensagens</h3>
                            <span className="message-count">8</span>
                        </a>
                        <a href="#" onClick={handleSendReport}>
                            <span className="material-symbols-sharp">
                                <ReportGmailerrorredSharpIcon />
                            </span>
                            <h3>Reportes</h3>
                        </a>
                        <a href="">
                            <span className="material-symbols-sharp"><SettingsIcon /></span>
                            <h3>Configurações</h3>
                        </a>
                        <Link  onClick={handleLogout}>
                            <span className="material-symbols-sharp"><ExitToApp /></span>
                            <h3>Sair</h3>
                        </Link>
                    </div>
                </aside>
                <main className="main">
                    <div className="insights">
                        <div className="sales">
                            <span className="teste"><SellIcon /></span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Vendas</h3>
                                    <h1>R$25,024</h1>
                                </div>

                            </div>
                            <small className="text-muted">Últimas 24 Horas</small>
                        </div>
                        <div className="expenses">
                            <span className=""><LocalShippingIcon /></span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Entregas</h3>
                                    <h1>1000</h1>
                                </div>

                            </div>
                            <small className="text-muted">Últimas 24 Horas</small>
                        </div>
                        <div className="income">
                            <span className="material-symbols-sharp"><MovingIcon /></span>
                            <div className="middle">
                                <div className="left">
                                    <h3>Rendimento</h3>
                                    <h1>R$250,024</h1>
                                </div>
                            </div>
                            <small className="text-muted">Últimas 24 Horas</small>
                        </div>
                    </div>
                    <div className="recent-orders">
                        <h2>Pedidos recentes</h2>
                        <div className="research">
                            <input placeholder="Pesquise por CNPJ ou código de rastreio" />
                            <button>pesquisar</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Cliente</th>
                                    <th>Rastreamento</th>
                                    <th>Pagamento</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((index, key) => (
                                    <tr key={key}>
                                        <td>{index.data}</td>
                                        <td>{index.cliente}</td>
                                        <td>{index.rastreamento}</td>
                                        <td>{index.pagamento}</td>
                                        {index.status === "Pendente" ? <td className="warning">{index.status}</td> : ""}
                                        {index.status === "Entregue" ? <td className="success">{index.status}</td> : ""}
                                        {index.status === "Em trânsito" ? <td className="warning">{index.status}</td> : ""}
                                        {index.status === "Cancelado" ? <td className="danger">{index.status}</td> : ""}
                                        <td className="details" onClick={() => showStatusPopup(index.status)}>Detalhes</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a href="#">Mostrar Tudo</a>
                    </div>
                </main>
                <div className="right">
                    <div className="top">
                    <button id="menu-btn">
                            <span><MenuIcon/></span>
                        </button>
                    </div>
                    <div className="recent-updates">
                        <h2>Atualizações Recentes</h2>
                        <div className="updates">
                            <div className="update">
                                <div className="profile-photo">
                                    <img src={ProfileDois} />
                                </div>
                                <div className="message">
                                    <p><b>Lucas Matheus</b> Acaba de solicitar o envio da maquineta para a ECCO</p>
                                    <small className="text-muted">Há 2 Minutos</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src={ProfileTres} />
                                </div>
                                <div className="message">
                                    <p><b>Gustavo Marques</b> Acaba de solicitar o envio da maquineta para a Oficina geral e Mercado bom Jesus</p>
                                    <small className="text-muted">Há 25 Minutos</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src={ProfileQuatro} />
                                </div>
                                <div className="message">
                                    <p><b>Rafael Santiago</b> Acaba de solicitar o reembolso a FICR</p>
                                    <small className="text-muted">Há 40 Minutos</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sales-analytics">
                        <h2>Análise de vendas</h2>
                        <div className="item online">
                            <div className="icon">
                                <span className="material-symbols-sharp"><LocalGroceryStoreSharpIcon /></span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Pedidos Online</h3>
                                    <small className="text-muted">Últimas 24 horas</small>
                                </div>
                                <h5 className="success">+40%</h5>
                                <h3>8000</h3>
                            </div>
                        </div>
                        <div className="item offline">
                            <div className="icon">
                                <span className="material-symbols-sharp"><ShoppingBagSharpIcon /></span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Pedidos Offline</h3>
                                    <small className="text-muted">Últimas 24 horas</small>
                                </div>
                                <h5 className="danger">-15%</h5>
                                <h3>1000</h3>
                            </div>
                        </div>
                        <div className="item customers">
                            <div className="icon">
                                <span className="material-symbols-sharp"><Person2SharpIcon /></span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>Grandes Pedidos</h3>
                                    <small className="text-muted">Últimas 24 horas</small>
                                </div>
                                <h5 className="success">+25%</h5>
                                <h3>850</h3>
                            </div>
                        </div>
                        <div className="item add-product" onClick={handleSelectOpcao}>
                            <div className="add-button">
                                <AddCircleSharpIcon />
                                <p>Adicionar pedido</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPage;





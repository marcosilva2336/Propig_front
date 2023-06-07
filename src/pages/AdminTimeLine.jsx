import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import timeLine from "../styles/timeLine.css"; // Estilos do componente de linha do tempo
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Ícone de círculo de verificação do Material UI
import { MapsHomeWork } from "@mui/icons-material"; // Ícone de casa do Material UI
import "react-vertical-timeline-component/style.min.css"; // Estilos adicionais do componente de linha do tempo
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Ícone de transporte do Material UI
import adressIcons from "../assets/adressIcons.svg"; // Ícones de endereço
import { useState } from "react"; // Importação do useState para manipulação de estado
import NavBarAdmin from "../components/NavBarAdmin"; // Barra de navegação para administração

function AdminTimeLine(){

    const [status, setStatus] = useState([]); // Estado para armazenar o status
    const [titleStatus, setTitleStatus] = useState(""); // Estado para armazenar o título do status
    const [descriptionOne, setDescriptionOne] = useState(""); // Estado para armazenar a primeira descrição
    const [descriptionTwo, setDescriptionTwo] = useState(""); // Estado para armazenar a segunda descrição
    const [idCounter, setIdCounter] = useState(0); // Contador de ID para cada status

    const handleSubmit = (e) =>{ // Função para lidar com o envio do formulário
        e.preventDefault();
        const statusList = {id: idCounter, titleStatus, descriptionOne, descriptionTwo}; // Objeto contendo as informações do status

        setStatus([...status, statusList]); // Atualiza o estado com o novo status adicionado
        setIdCounter(idCounter+1); // Incrementa o contador de ID
        console.log(statusList.id);
        console.log(status);
    }
   
    return(
        <section className="tl">
            <form className="admin-form" onSubmit={handleSubmit} style={{textAlign: "center"}}>
                <h4>Admin Painel</h4>
                <label htmlFor="status">Status</label>
                <select required id="status" value={titleStatus || ""} onChange={(e)=> setTitleStatus(e.target.value)}>
                    <option required>Selecione uma opção</option>
                    <option>Produto disponível para coleta!</option>
                    <option>Produto coletado pela transportadora!</option>
                    <option>Produto entregue!</option>
                </select>

                <label htmlFor="description-one">Descrição 1</label>
                <select id="description-one" value={descriptionOne || ""} onChange={(e)=> setDescriptionOne(e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value="Nota fiscal emitida">Nota fiscal emitida</option>
                    <option value="Produto coletado">Produto coletado com sucesso</option>
                </select>

                <label htmlFor="description-two">Descrição 2</label>
                <select id="description-two" value={descriptionTwo || ""} onChange={(e)=> setDescriptionTwo(e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option>aguardando transportadora</option>
                    <option value="Em rota">Em rota para destino</option>
                </select>
                <button type="submit">Enviar</button>
            </form>        
           <div className="time-line">
            <div className="timeline-header">
                <div className="timeline-header-father">
                    <div className="header-element">
                        <h1>DATA</h1>
                    </div>

                    <div className="header-element">
                        <h1>CÓDIGO</h1>
                    </div>

                    <div className="header-element-p">
                        <h1>PRODUTO</h1>
                    </div>
                </div>

                <div className="timeline-header-mother">
                    <div className="header-element-mother">
                        <h5>03/04/2023</h5>
                    </div>

                    <div className="header-element-mother">
                        <h5>K5I123KA3KAI09293LN</h5>
                    </div>

                    <div className="header-element-mother">
                        <h5>Maquineta Propig</h5>
                    </div>
                </div>

            </div>
            <div className="vertical">
                <VerticalTimeline lineColor="#3e497a">
                    {idCounter <= 0 ? <h2>Aguardando atualizações...</h2>: ""}
                    {status.filter(states => states.id == 0).map(states => (
                        <VerticalTimelineElement key={states.id} VerticalTimelineElement iconStyle={{background: "#0d6efd", color: "white"}} icon={<MapsHomeWork/>}>
                            <h3>{states.titleStatus}</h3>
                            <p>{states.descriptionOne}</p>
                            <p>{states.descriptionTwo}</p>

                        </VerticalTimelineElement>
                    ))}

                    {status.filter(states => states.id == 1).map(states => (
                        <VerticalTimelineElement key={states.id} VerticalTimelineElement iconStyle={{background: "#0d6efd", color: "white"}} icon={<LocalShippingIcon/>}>
                            <h3>{states.titleStatus}</h3>
                            <p>{states.descriptionOne}</p>
                            <p>{states.descriptionTwo}</p>

                        </VerticalTimelineElement>
                    ))}

                    {status.filter(states => states.id == 2).map(states => (
                        <VerticalTimelineElement key={states.id} VerticalTimelineElement iconStyle={{background: "green", color: "white"}} icon={<CheckCircleIcon/>}>
                            <h3>{states.titleStatus}</h3>
                            <p>{states.descriptionOne}</p>
                            <p>{states.descriptionTwo}</p>

                        </VerticalTimelineElement>
                    ))}
                                        
                    
                
                </VerticalTimeline>

                </div>
           </div>

        </section>
    )

}

export default AdminTimeLine;

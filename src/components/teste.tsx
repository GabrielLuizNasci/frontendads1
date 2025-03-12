import React, {useState, useEffect} from "react";
import { Icon } from "@iconify/react";

const Teste = () => {
    return(
        <div>
            <img src="/img/banguela.gif" className="App-logo" alt="Banguela" />
            <p>
            Insira a música de Driftveil city aqui
            </p>
            
            <a href="https://github.com/GabrielLuizNasci" className="App-link">
                <Icon icon="mdi:github" width="35" height="35" />
                Confira meu github
            </a>
            <br></br>
            <a href="https://www.youtube.com/@JustAnArtist_141" className="App-link">
                <Icon icon="mdi:youtube" width="35" height="35" />
                Confira meu Youtube
            </a>
        </div> 
    )
};

export default Teste;
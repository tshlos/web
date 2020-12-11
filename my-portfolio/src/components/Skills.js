import React from 'react';
import "./Skills.css";
import IconReact from 'react-devicon/react/original/ReactOriginal.svg';
import IconJavascript from 'react-devicon/javascript/original/JavascriptOriginal.svg';
import IconRuby from 'react-devicon/ruby/original/RubyOriginal.svg';
import IconNodejs from 'react-devicon/nodejs/original/NodejsOriginal.svg';
import IconTypescript from 'react-devicon/typescript/plain/TypescriptPlain.svg';
import IconPostgresql from 'react-devicon/postgresql/original/PostgresqlOriginal.svg';
import IconHtml5 from 'react-devicon/html5/original/Html5Original.svg'; 
import IconCss3 from 'react-devicon/css3/original/Css3Original.svg'; 
import IconRails from 'react-devicon/rails/plain-wordmark/RailsPlainWordmark.svg';


export default function Skills() {
    return (
        <div className="skills-icons">
            <a id="skills"> </a>
            <img className="icon" src={IconReact} width={100} height={100} />
            <img className="icon" src={IconJavascript} width={100} height={100} />
            <img className="icon" src={IconTypescript} width={100} height={100} />
            <img className="icon" src={IconRuby} width={100} height={100} />
            <img className="icon" src={IconNodejs} width={100} height={100} />
            <img className="icon" src={IconRails} width={100} height={100} />
            <img className="icon" src={IconPostgresql} width={100} height={100} />
            <img className="icon" src={IconHtml5} width={100} height={100} />
            <img className="icon" src={IconCss3} width={100} height={100} />
        </div>
    )
}

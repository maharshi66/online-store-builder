import React from 'react';
import "tachyons";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcase, faStore, faCreditCard, faFlagCheckered, faMoneyCheck as faWireframe} from '@fortawesome/free-solid-svg-icons'
import "./CreateStore.css";

const color = "near-black";

const CreateStoreBreadcrumb = (props) => {
  return (
    <div className="fixed bg-purple left-0 w-100 h2 h3-ns flex flex-row justify-around pa1">
    		<Link className="white f6">
	    		<FontAwesomeIcon className={`f2-ns ${color} f3 pb2`} icon={faBriefcase} size="sm"/>
    		</Link>
    		<FontAwesomeIcon className="f4-ns f5 mt1 white" icon={faArrowRight} size="sm" />
    		<Link className="white f6">
	    		<FontAwesomeIcon className="f2-ns f3 pb2" icon={faStore} size="sm"/>
    		</Link>
    		<FontAwesomeIcon className="f4-ns f5 mt1 white" icon={faArrowRight} size="sm" />
    		<Link className="white f6">
	    		<FontAwesomeIcon className="f2-ns f3 pb2" icon={faWireframe} size="sm" />
    		</Link>
    		<FontAwesomeIcon className="f4-ns f5 mt1 white" icon={faArrowRight} size="sm" />
    		<Link className="white f6">
	    		<FontAwesomeIcon className="f2-ns f3 pb2" icon={faCreditCard} size="sm" />
    		</Link>
    		<FontAwesomeIcon className="f4-ns f5 mt1 white" icon={faArrowRight} size="sm" />
    		<Link className="white f6">
	    		<FontAwesomeIcon className="f2-ns f3 pb2" icon={faFlagCheckered} size="sm" />
    		</Link>
    </div>
  )
}

export default CreateStoreBreadcrumb;
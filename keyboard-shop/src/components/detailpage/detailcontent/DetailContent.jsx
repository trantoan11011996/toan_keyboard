import React from "react";

export default function DetailContent({description}){

    return(
        <div className="detail-content">
            <p className="detail-title">{description.titleDesc}</p>
            <div className="list-description-wrap">
                {description.option.map((title,index)=>{
                    return(
                        <ul key={index} className="description-list">
                            <p className="description-title">{title.titleOption}</p>
                            {title.listOption.map((content,index)=>{
                                return(
                                    <li key={index}>{content}</li>
                                )
                            })}
                        </ul>
                        
                    )
                })}
            </div>
        </div>
    )
}
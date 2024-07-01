// @flow
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr, ModelItem } from './Adidas';
import { pumaArr } from './Puma';

type ModelProps = {};


type allModelsType = {
    [key: string]: ModelItem[]
}

const allModels: allModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}

export const Model = ( props: ModelProps ) => {

    const {manufacturer, modelID} = useParams()

    console.log(manufacturer)
    console.log(modelID)

    const model = manufacturer
        ? allModels[manufacturer].find(model => model.id === Number(modelID))
        : allModels.adidas[0]

    return model === undefined
        ? <p>Такой модели не существует</p>
        : <div style={ {paddingLeft: '50px'} }>
            <h1>{ model.model }</h1>
            <h3>{ model.collection }</h3>
            <p>{ model.price }</p>
            <img src={ model.picture } alt="" style={ {width: '80%'} } />
        </div>
    return <div></div>
};
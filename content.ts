const content:{[index: string]:Array<string>}={
    'articles':[
        '夕拾散记×信宜中学'
    ],
    'documents':[
        '涼槿Ryokin'
    ]
}
export default {
    get:(index:string)=>{
        let list:Array<object>=[]
        content[index].forEach(element => {
            list.push({text:element,link:`/${index}/${element}`})
        });
        return list
    }
}
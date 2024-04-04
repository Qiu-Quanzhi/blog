const indexs = [
    { text: '始序阁', link: '/articles' },
    { text: '造暇坊', link: '/documents' },
]
const contents: { [index: string]: Array<string> } = {
    'articles': [
        '夕拾散记×信宜中学'
    ],
    'documents': [
        '古国简展'
    ]
}
const getIndex=()=>{
    let list:Array<string>=[]
    indexs.forEach(element => {
        list.push(element.link.slice(1))
    });
    return list
}
const getRedirection=()=>{
    let list:Array<object>=[]
    indexs.forEach(element => {
        list.push({ params: { redirect: element.link.slice(1) }})
    });
    return list
}
const getContent= (index: string) => {
    let list: Array<object> = []
    contents[index].forEach(element => {
        list.push({ text: element, link: `/${index}/${element}` })
    });
    return list
}
const getSidebar= ()=>{
    let list={}
    indexs.forEach(element => {
        list[`${element.link}/`]=[{
            text: element.text,
            items: getContent(element.link.slice(1))
        }]
    });
    return list
}
export default {
    indexs,
    contents,
    getIndex,
    getRedirection,
    getContent,
    getSidebar
}
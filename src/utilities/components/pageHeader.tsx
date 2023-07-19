interface Props{
    title: string
}
export default function(props:Props){
    const {title} = props;
    return (
        <h5 className="mt-3 fw-medium page-header">{title}</h5>
    )
}
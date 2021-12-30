export const Table = ({list}) => {
  let {
    name,
    age,
    address,
    department,
    salary,
    marital,
    file
   } = list
    return(
        <div>{file}{name}
        <img src={file} alt="gjhf" />
        </div>
        
    )
}
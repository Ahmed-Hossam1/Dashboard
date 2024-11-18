interface IProps {
    error : string | undefined
}
const Error = ({error} : IProps) => {
  return (
    <div className="text-sm text-red-600 ">{error}</div>
  )
}

export default Error
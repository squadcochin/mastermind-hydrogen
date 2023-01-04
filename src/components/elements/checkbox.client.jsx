export default function checkbox(props) {
    return(
        <div className="form-check">
            <input className="cursor-pointer" type="checkbox" value="" />
            <label className="py-1 px-2 form-check-label inline-block text-gray-800" for="flexCheckDefault">
                {props.name}
            </label>
        </div>
    );
}
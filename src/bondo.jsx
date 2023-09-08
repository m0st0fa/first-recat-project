export default function Bondo({ bondo }) {
    const { name, email } = bondo;
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    );
}

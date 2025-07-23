const InputError = ({ messages = [], className = '' }) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <p
                        className={`${className} text-base text-red-600`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default InputError

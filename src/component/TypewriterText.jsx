import React from 'react'

function TypewriterText({text} ) {
    const [displayedText, setDisplayedText] = React.useState('');
    const [isTyping, setIsTyping] = React.useState(true);

    React.useEffect(() => {
        if (!isTyping) return;
        let i = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 50);
        return () => clearInterval(typingInterval);
    }, [text]);





    return (
        <div style={{
            color: '#fff',
            fontSize: '1.5rem',
            marginBottom: '20px',
            fontStyle: 'italic',
            opacity: isTyping || displayedText.length > 0 ? 1 : 0,
            transition: 'opacity 0.5s ease'
        }}>
            {displayedText}
        </div>
    )
}

export default TypewriterText

function coverLetter() {
    const company = localStorage.getItem('company') || 'the company'; // Fallback to 'the company' if not found
    const letterParts = `Dear [company] Team,

Imagine my delight when you discovered a hidden feature on my website, eagerly awaiting your visit. As soon as you entered "[company]" into the mystical input field, voilà! A bespoke cover letter, crafted just for you, elegantly unfolded.

Why this sorcery? Because the stars aligned (alongside my programming prowess) to herald our potential collaboration. As a student of Bachelor of Science in Computer Science from Saint Mary's University with a knack for full-stack and software development, I've sharpened my skills to almost (not at all) supernatural levels, eagerly anticipating the chance to contribute to [company]'s groundbreaking endeavors.

While developing my own personal projects, I not only mastered (used loosely) the art of coding but also, on multiple occasions, managed to debug elusive errors (made by me) that had haunted me for weeks—using nothing but a rubber duck and sheer determination. Clearly, destiny has prepared me for the innovative challenges at [company].

So, let's not let the universe down. I am primed to bring my coding finesse, problem-solving prowess, and a touch of humor to the [company] team. And, should the need arise, my peerless tea-making skills are at your service for those marathon brainstorming sessions.

Warmest regards,

Mohammad Zaid Khan`.split('[company]').join(`<span class="dynamic-company"></span>`);

    const coverElement = document.getElementById('cover');
    coverElement.innerHTML = letterParts.replace(/\n/g, '<br>'); // Replace \n with <br> for HTML

    const handleTypingEffect = () => {
        const spans = document.querySelectorAll('.dynamic-company');

        spans.forEach(span => {
            let step = 'deleting';
            let content = '${company}';
            let index = content.length;

            const update = () => {
                if (step === 'deleting') {
                    if (index > 0) {
                        // Deleting effect
                        content = content.slice(0, -1);
                        index--;
                        span.textContent = content + '|'; // Add cursor during deleting
                    } else {
                        // Switch to typing
                        step = 'typing';
                        index = 0;
                        content = ''; // Clear content to start typing
                    }
                } else if (step === 'typing') {
                    if (index < company.length) {
                        // Typing effect
                        content += company[index];
                        index++;
                        span.textContent = content + '|'; // Add cursor during typing
                    } else {
                        // Typing complete, remove the cursor
                        span.textContent = content; // Remove cursor when typing is complete
                        clearInterval(interval);
                    }
                }
            };

            const interval = setInterval(update, 250); // Adjust timing as needed

            // Additional functionality to blink the cursor at the end of typing
            const blinkCursor = () => {
                if (span.textContent.endsWith('|')) {
                    span.textContent = span.textContent.slice(0, -1); // Remove cursor
                } else {
                    span.textContent += '|'; // Add cursor
                }
            };

            // Start blinking cursor at the end of typing
            setTimeout(() => {
                if (step === 'typing' && index >= company.length) {
                    setInterval(blinkCursor, 500); // Adjust blinking rate as needed
                }
            }, 250 * company.length);
        });
    };

    handleTypingEffect();
}

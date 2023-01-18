import { useState } from 'react';

/* eslint-disable jsx-a11y/control-has-associated-label */
const copy = require('clipboard-copy');

function Footer() {
  const [copied, setcopy] = useState(false);

  const copyEmail = async () => {
    const timer = 2000;
    setcopy(true);
    copy('luisfelipe.apoloniorowe@gmail.com');
    await setTimeout(() => setcopy(false), timer);
  };

  return (
    <footer>
      {copied && <p className="copied">Email copiado com sucesso!</p>}
      <ul>
        <i
          className="fa-regular fa-envelope fa-2x email-copy"
          onClick={ copyEmail }
          role="presentation"
        />
        <a href="https://github.com/LuisRowe" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-2x" /></a>
        <a href="https://www.linkedin.com/in/luis-rowe/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2x" /></a>
      </ul>

    </footer>
  );
}

export default Footer;

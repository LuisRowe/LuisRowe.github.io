import foto from '../img/fotoatual.jpeg';

function ContentHome() {
  return (
    <div>
      <header>
        <h1 id="nomeCompleto">LUIS FELIPE APOLONIO ROWE</h1>

      </header>

      <main>
        <img id="minha-foto" src={ foto } alt="Foto atual de Luis Rowe" width="200px" />

        <section id="sobre-mim">

          <h2>Sobre mim:</h2>

          <p>
            Nascido em 01/12/1992 no noroeste do Paraná surge a pessoa que vos fala,
            ou vos digita, atualmente morando em
            {' '}
            <em>Icaraíma no Paraná</em>
            , uma
            {' '}
            <strong> grande </strong>
            {' '}
            pequena cidade. Formado em Administração e em Matemática, estou me empenhando
            na área da tecnologia e através do curso de Desenvolvimento Web da
            {' '}
            <strong>Trybe</strong>
            {' '}
            busco adquirir Hard skills, assim como aprimorar minhas Soft skills,
            para adentrar nesse incrível mercado de trabalho.
          </p>
        </section>

        <h2 id="habilidades">Lista de habilidades:</h2>

        <ul>
          <li>Pensamento analítico.</li>
          <li><strong>Comunicação</strong></li>
          <li>BASH</li>
          <li>GIT</li>
          <li>HTML</li>
        </ul>

      </main>
    </div>
  );
}

export default ContentHome;

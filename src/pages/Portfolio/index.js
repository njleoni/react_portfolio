import Project from '../../components/Project';

const Portfolio = () => {
    return (
    <section class="container port">
      <div class="card port">
        <div class="card-body">
          <div class="row port">
            <div class="col">
              <h2>Portfolio</h2>
              <hr />
            </div>
          </div>
          <div class="row port">
            <Project />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Portfolio

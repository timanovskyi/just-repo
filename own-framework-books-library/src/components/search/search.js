import { DivComponent } from "../../common/div-component.js";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
      <div class="search__wrapper">
          <input 
          type="text" 
          name="name"
          class="search__input"
          value="${this.state.searchQuery ? this.state.searchQuery : ""}"
           placeholder="Search book" />
               <img src="/static/search.svg" alt="search">
        </div>
        <button>
            <img src="/static/search-white.svg" alt="search-button">
        </button>
    `;

    this.el
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.el.querySelector("input").addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") {
        this.search();
      }
    });
    return this.el;
  }

  search() {
    const value = this.el.querySelector("input").value;
    this.state.searchQuery = value;
  }
}

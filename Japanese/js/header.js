let headerContent = `
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-dark bg-transparent justify-content-center"
        id="navbarSupportedContent1"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="index.html">
              <img
                src="apple-icon.png"
                alt="Home"
                style="height: 20px; width: auto; margin-right: 5px"
              />
              ホーム
              <span class="sr-only"></span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-dark" href="education.html">教育</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="work.html">職務経歴</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="projects.html">プロジェクト</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="language.html"
              >言語学習</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="other.html">その他</a>
          </li>

          <li class="nav-item">
            <a class="nav-item"> <a class="nav-link text-dark" href="../index.html">English Version</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            ドロップダウン
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <a
                class="dropdown-item"
                href="https://www.paypal.com/donate/?business=B6GXXULAEPFF2&no_recurring=0&currency_code=USD"
                >ディランへの寄付</a
              >
              <a
                class="dropdown-item"
                href="https://tools.tastethecode.com/youtube-latest/r/raydillanv"
                >最新の動画</a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="https://github.com/raydillanv"
                >ディランのGitHub</a
              >
            </div>
          </li>
        </ul>
      </div>
`;
document.querySelector('#NavContainer').insertAdjacentHTML('beforeend', headerContent);
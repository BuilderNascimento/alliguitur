/**
 * Alligui TUR — JavaScript global (vanilla)
 */

(function () {
  "use strict";

  var WA_NUMBER = "5543996112665";
  var WA_BASE = "https://wa.me/" + WA_NUMBER;

  function setSiteTopPadding() {
    var top = document.querySelector(".site-top");
    if (!top) return;
    var h = top.offsetHeight;
    document.documentElement.style.setProperty("--site-top-h", h + "px");
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var mobileNav = document.querySelector(".mobile-nav");
    var backdrop = document.querySelector(".mobile-nav__backdrop");
    var panelLinks = mobileNav
      ? mobileNav.querySelectorAll("a[href]")
      : [];

    if (!toggle || !mobileNav) return;

    function closeNav() {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }

    function openNav() {
      toggle.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("is-open");
      document.body.classList.add("nav-open");
    }

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) closeNav();
      else openNav();
    });

    if (backdrop) {
      backdrop.addEventListener("click", closeNav);
    }

    panelLinks.forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 960) closeNav();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  function initRevealOnScroll() {
    var els = document.querySelectorAll(".reveal-on-scroll");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -40px 0px", threshold: 0.08 }
    );

    els.forEach(function (el) {
      obs.observe(el);
    });
  }

  function buildWhatsAppUrl(text) {
    return WA_BASE + "?text=" + encodeURIComponent(text);
  }

  function initFretamentoForm() {
    var form = document.getElementById("form-fretamento");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var nome = (fd.get("nome") || "").toString().trim();
      var tel = (fd.get("telefone") || "").toString().trim();
      var email = (fd.get("email") || "").toString().trim();
      var destino = (fd.get("destino") || "").toString().trim();
      var embarque = (fd.get("embarque") || "").toString().trim();
      var data = (fd.get("data") || "").toString().trim();
      var passageiros = (fd.get("passageiros") || "").toString().trim();
      var msg = (fd.get("mensagem") || "").toString().trim();

      if (!nome || !tel) {
        alert("Por favor, preencha nome e telefone.");
        return;
      }

      var texto =
        "*Orçamento de fretamento — Alligui TUR*\n\n" +
        "*Nome:* " +
        nome +
        "\n" +
        "*Telefone:* " +
        tel +
        "\n" +
        "*E-mail:* " +
        (email || "—") +
        "\n" +
        "*Destino / Evento:* " +
        (destino || "—") +
        "\n" +
        "*Local de embarque:* " +
        (embarque || "—") +
        "\n" +
        "*Data da viagem:* " +
        (data || "—") +
        "\n" +
        "*Nº aprox. de passageiros:* " +
        (passageiros || "—") +
        "\n" +
        "*Mensagem adicional:*\n" +
        (msg || "—");

      window.open(buildWhatsAppUrl(texto), "_blank", "noopener,noreferrer");
    });
  }

  function initOrcamentoForm() {
    var form = document.getElementById("form-orcamento");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var tipo = (fd.get("tipo") || "").toString().trim();
      var nome = (fd.get("nome") || "").toString().trim();
      var tel = (fd.get("telefone") || "").toString().trim();
      var email = (fd.get("email") || "").toString().trim();
      var destino = (fd.get("destino") || "").toString().trim();
      var periodo = (fd.get("periodo") || "").toString().trim();
      var passageiros = (fd.get("passageiros") || "").toString().trim();
      var msg = (fd.get("mensagem") || "").toString().trim();

      if (!nome || !tel) {
        alert("Por favor, preencha nome e telefone.");
        return;
      }

      var texto =
        "*Solicitação de orçamento — Alligui TUR*\n\n" +
        "*Tipo de serviço:* " +
        (tipo || "—") +
        "\n" +
        "*Nome:* " +
        nome +
        "\n" +
        "*Telefone:* " +
        tel +
        "\n" +
        "*E-mail:* " +
        (email || "—") +
        "\n" +
        "*Destino / roteiro desejado:* " +
        (destino || "—") +
        "\n" +
        "*Período / datas:* " +
        (periodo || "—") +
        "\n" +
        "*Nº de passageiros (aprox.):* " +
        (passageiros || "—") +
        "\n" +
        "*Observações:*\n" +
        (msg || "—");

      window.open(buildWhatsAppUrl(texto), "_blank", "noopener,noreferrer");
    });
  }

  function initContatoForm() {
    var form = document.getElementById("form-contato");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var nome = (fd.get("nome") || "").toString().trim();
      var tel = (fd.get("telefone") || "").toString().trim();
      var email = (fd.get("email") || "").toString().trim();
      var assunto = (fd.get("assunto") || "").toString().trim();
      var mensagem = (fd.get("mensagem") || "").toString().trim();

      if (!nome || !tel) {
        alert("Por favor, preencha nome e telefone.");
        return;
      }

      var texto =
        "*Contato pelo site — Alligui TUR*\n\n" +
        "*Nome:* " +
        nome +
        "\n" +
        "*Telefone:* " +
        tel +
        "\n" +
        "*E-mail:* " +
        (email || "—") +
        "\n" +
        "*Assunto:* " +
        (assunto || "—") +
        "\n\n" +
        "*Mensagem:*\n" +
        (mensagem || "—");

      window.open(buildWhatsAppUrl(texto), "_blank", "noopener,noreferrer");
    });
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function setFooterYear() {
    document.querySelectorAll(".js-year").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  onReady(function () {
    setSiteTopPadding();
    setFooterYear();
    initMobileNav();
    initRevealOnScroll();
    initFretamentoForm();
    initOrcamentoForm();
    initContatoForm();

    window.addEventListener("resize", setSiteTopPadding);
  });
})();

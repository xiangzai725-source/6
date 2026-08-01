const moods = [...document.querySelectorAll('.mood')];
    const app = document.querySelector('.app');
    const moodOptions = document.querySelector('.mood-options');
    const moodPanel = document.querySelector('.mood-panel');
    const cta = document.querySelector('.cta');
    const ctaLabel = document.querySelector('.cta-label');
    const resultScreen = document.querySelector('.result-screen');
    const resultBack = document.querySelector('.result-back');
    const resultReselect = document.querySelector('.result-reselect');
    const resultShare = document.querySelector('.result-share');
    const shareScreen = document.querySelector('.share-screen');
    const shareClose = document.querySelector('.share-close');
    const shareFriend = document.querySelector('.share-friend');
    const shareDownload = document.querySelector('.share-download');
    const reselectScreen = document.querySelector('.reselect-screen');
    const reselectConfirm = document.querySelector('.reselect-confirm');
    const finalScreen = document.querySelector('.final-screen');
    const finalConfirm = document.querySelector('.final-confirm');
    let reselectCount = 0;

    function selectMood(target) {
      moods.forEach((mood) => mood.setAttribute('aria-pressed', String(mood === target)));
      moodOptions.dataset.selected = target.dataset.moodKey;
      moodPanel.dataset.selected = target.dataset.moodKey;
    }

    moods.forEach((mood) => mood.addEventListener('click', () => {
      selectMood(mood);
      ctaLabel.textContent = '帮我选';
    }));

    function showResult() {
      resultScreen.hidden = false;
      app.classList.add('show-result');
      resultScreen.focus({ preventScroll: true });
    }

    function showChooser() {
      shareScreen.hidden = true;
      reselectScreen.hidden = true;
      finalScreen.hidden = true;
      reselectCount = 0;
      app.classList.remove('show-result');
      resultScreen.hidden = true;
      ctaLabel.textContent = '帮我选';
      cta.focus({ preventScroll: true });
    }

    function showShare() {
      shareScreen.hidden = false;
      shareScreen.focus({ preventScroll: true });
    }

    function closeShare() {
      shareScreen.hidden = true;
      resultShare.focus({ preventScroll: true });
    }

    function showReselect() {
      reselectCount += 1;
      if (reselectCount === 1) {
        reselectScreen.hidden = false;
        reselectScreen.focus({ preventScroll: true });
      } else {
        finalScreen.hidden = false;
        finalScreen.focus({ preventScroll: true });
      }
    }

    function closeReselect() {
      reselectScreen.hidden = true;
      resultReselect.focus({ preventScroll: true });
    }

    function closeFinal() {
      finalScreen.hidden = true;
      resultReselect.focus({ preventScroll: true });
    }

    cta.addEventListener('click', showResult);
    resultBack.addEventListener('click', showChooser);
    resultReselect.addEventListener('click', showReselect);
    resultShare.addEventListener('click', showShare);
    shareClose.addEventListener('click', closeShare);
    reselectConfirm.addEventListener('click', closeReselect);
    finalConfirm.addEventListener('click', showChooser);

    shareFriend.addEventListener('click', async () => {
      const shareData = {
        title: 'EAT · 今日推荐',
        text: '快乐优先，其他靠边。'
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareData.text);
        }
      } catch (error) {
        // 用户取消分享时保持页面不变。
      }
    });

    shareDownload.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'svg/download.svg';
      link.download = 'EAT-今日推荐.svg';
      link.click();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (!shareScreen.hidden) {
        closeShare();
      } else if (!finalScreen.hidden) {
        closeFinal();
      } else if (!reselectScreen.hidden) {
        closeReselect();
      } else if (!resultScreen.hidden) {
        showChooser();
      }
    });
  
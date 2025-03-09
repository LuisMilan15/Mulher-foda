const messages = [
    "Você é a razão do meu sorriso! ❤️",
    "Cada momento com você é especial",
    "Você ilumina meus dias",
    "Meu amor por você cresce a cada dia",
    "Você é meu presente da vida",
    "Juntos somos mais fortes",
    "Você me faz querer ser melhor",
    "Nosso amor é único",
    "Você é minha inspiração diária",
    "Te amo mais que tudo!"
];

// Substitua estes URLs pelas URLs das suas fotos
const photos = [
    "https://lh3.googleusercontent.com/pw/AP1GczOTrqP6w7yt0yWJtXpH17EOzaXajFDQKcR0vrJWzzshSDEaBVfZGxMVY10isdW_6mP_vOi69A5USt6FjSey7ztVn1u-bRNrJ9uh-AwF1v9-W4YGJDy2aQos_zIpSdlcxevzeFLZt3FeM41LKENgMf7RrQ=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOYiNynFOEk8vB5WGkVluoWpO7IbL15xYd18qf2_PbCZHzUDBrt7cmDQzdrYc-tSyTrxEeUUjHyGQ5rJvCnqHhApNvO1Q9uBHxbvHBSYMlc8eKz1jrq3kiermg8EoBzJQcmAT_dBuYj2fDpQLhzGH8k1g=w439-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczN95fnMCDiVGpfQ-n_Ny_72XaH-cbtgMy7cCWT_OOziNDy1aD1s8zXHWYhuDCfhyRwxKHgM3ySnjD_iOHtcxPGqdhcEl22gWFtFFb_5cOsgcMrUufeVeZYJIIS95bvuGPOkOrQst3bytbtW7CLmf-21Nw=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPrXK1-j-eLAg5Aw24mvQkRv6MmanvCXgNS5sq6mP9HvrGJNfEM3akqiiCMjhzVj0jcH2UUGYL2FvMiSctV_zqrJf39d6llfMCNZn388M0r8MFp36L_BbjgIMgZDVB26Dd1V2MZc5epq0IK8vjmxt77_w=w1255-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMmqUY8P837ycsrwaeIyp-oghBKw1A060X51dLYaJU1fEJJtQl6DivUqdw34LD0sPUsc4XKllShSzDGqRdLQ_WbmFHs6QLHMJVV_1qK5JWsTBkltK1qn7JGcpBt32jV-14A2pO7J6RITtvIyCp7lT9ziQ=w1255-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczO9c_g3U7rLnVucNYFfPmz26Wb1o61GTe4fGH2zE-phfcl3II4e_DFHHGyj_mlUApjrzIis1Aw0QlVzb0UJIZOWP5mh3Hldoz7CCAwl92czo5j-KVFZs8N2wMmQJTpXKk0T1GEgkLQR3O0t3GNYs1tqdA=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMo_LBMC7_nDmW6rffuDZZpzie8U9PhsQk7ckR9h2ybJhIiTd1XVv0nFBsvDCoWXebhJYg05HZg_o_6xodjsqDuvGtHH3DZ_AWH_r9K8UluJ0dPRTHh0zKeMGxfye7uMfbwlyhoZ76Qn3wbV9v71Hiy8g=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczO9uNn-yO7inWuLDZBaFrR5UqNkPfhWnmft8wiwPGdLovHH4hvD2fVqUdlUfMEKmtj9d31M8mDtbz3eLdtcexbjK7N5aPq_Sv1MtfMP33vy6dGYVtAwRO7GyNf9uAtnds9J69a0411Z-0pwKGoQtVDJtg=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMOEr_gZrqxcHJaCMK_Nyz9TSJ9_GRDLb0v9nEqTcFdcI5KK4zp5IhYmsgNJR49xYyl50VUoY9zId1sJse6yomS0N4usOpn3_NYM9zI70yQE-vRaLSxoKpWOaBO4hjqB_P7ht8ectaKkdTzYQU6t6sNmA=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOT4EEb0G7GGM8RvyFAovPpYO_gPPjtSR0n6R0_CkzqG2Rx_afJofeiAGRzQHrPI6_Vwgey01vsykCFEUI66HBeOVO9pcag_Ep5FcR4DUuynpsOgit3BlGBhrd8u8aPYoCxpX5B38gUtqZRHOy1Z34Y-g=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNaMx_XzdwZ1KZznJcPXjOlTLqtVnslm2DHWkc3KwvviS068C7VYJlb2zBQK9HSosIOAi7-xBneq1FisCEVgz7urwbqMbuzJVHHUBzL0cPrZUVjsfsUJWLi2yjrKRzH5tAuR5oJ0tG12jC83Byw8JpXww=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPMS7weUip72diADB8Gmf2YPQFpVfME9yblQHgfsq54HUDTxUSHYwo4l2Z-PwY2vR7vN3TSJrGYTjhPel9Wg-eM_mi_DKJ9OoPuW6hOKEdTcnF1cqzSpbLzLGLCa4Y10_-Vs4OrNGQnjDbOloBplW9VxA=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMJG-PN4hO8zYia6FbRuQFkOGAxuDr5ShVEgL4DcwVxI1fO41GUXEOsu40iogo9YK1nAFYnMFliCs6b11_iti-AWsZSqJZB5gJs5Lk5G6INKet1f4ROYpiUV4Tg0_slovqjxdax8vxvKKrOFdn_WIbtQA=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMX-AAjjlSgN3OnAa91lbrMctLhpeDqlImAeimyaubQp7I-qfacwiSdGpMDY-78IR1yN5oAGxOwyonfSvWf5FrQcztttQLuw-pNzSweYFf0N9fw0l47ruM6r8_M4hGHHMEpU50UCDHRdVV4H5spckhS_A=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPIge3G29Q8r2VMSNdCZt3pIOBaNt4d5cVZzEQSJwkaW-t3Jl_DJOOlZraKy1MJtsh_spDwAb9eUE3je5GJqaVohKiC4kDkBxx-df2dnV5yNfYDVsMcDTaQblmWO3kpd2LnSa27xeHnsZkgBp8f-Wjpow=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMJ8Ffo445GLbWFOI6aKbnLRHZPq5MFywDp_jIqS8zPdJG6lHrA_froJKOYhKVtDTXi7oq1PzqbgBsDPqoD50fDkDJugJbQXa2TqRpTM5Hz7JtSri6qRi74WaXjgJ2VnL7NjcSs8xmU1sBPZE0iU2Ig0g=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczORavw_SHbd80EV1ILXxWZh9A8G9uaw32xwEjuj1XmJDVx7Sxic-iHZ9COIRFYBvqFzk5txy1Duh_pLB8J2aW-iGELZcFATEG47007RaVucsNf_22wNPiVhuQC1x4MoADmNQEjeusSiRVonzms8jyz9HQ=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNIMZlXF5--ARjkPwpyOSuxiMyAGCMvsiVQ4ZOEw2CjVebUwz43zwaXljVLM9txZLImWVz_1XiuzUjY1aeuUsyE0_apYlKACLG6ICg2S5g1oIgiS5BzdlCTH61CiwnSOf9pwmaKLesu6yKRtyMwBvBk_Q=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOslMKPfdzI4YsWZnRg6kcFOcli18x1iRU35PyOK8n90-mlw4xAtAHgSyFkTjVJfR2m2e4S8ufiie6H_ayRJaQ_l4SER37wJEkemITPQHRnkOPvxTgvkM7syRHbwUpWvwRrimP1dQHY-crfKbDxsi01_Q=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPYVGzsrw0sowaSDh7FxgW_qX7p9oToDuWRcPdPbGrZHFdlGxFDyVViwQRMr9lKg3NrtN8WFtv5-japcH--AEdm1MAszhKgKtMIZ0qMzL5Zqs6YCIVWiVDzJt268nUrLLL2CPZAFYbBHjleip8lpsrw_A=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM7HAmDuQXIUfkDZZmXIXYG8Hrs9xjbSJpONkFNWzb0imVRKxQPZvk8Sx4gHOaatECT2v4a-4pE3PrSAnrBp0ODZu9GkOuh4haStFwAAbJsMCG1GQX_94PD_eiKCZWVveKvbshr7_LFL-lvZkH1zoNBZA=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNJezs2JTYhNgsmzQyaJBZjD3rGZmTsxGXhBme36KXToEWoxNfYbtEQI6VMnGZqBN-eygCktQlbGH12-nrc3-r3O59mDli51HrSmWtqKjfyPZqFxPnad3XdPvlwS_3LN_3W36qG-ChPakZymH1DKwKl5A=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOTLRtVqElYBSmONHx23N67zuUnrreyQgt8KXAMWhaZMhDMNojRuzXw4P-Nob3hlnpeebknJHyVJtBM6sz6in0XcsVsDA1oVzQzlH6vQsCSs9P2wbR3LL__Bc1NX4O5hD45OCUVe8TyIMZPqZGmIvqiPg=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMJ1TJkcC4hB7v-Hx0WTy9dBP46gVhXzmHQmwJRup8xhafyKOC9UE6w_LwbH1fV51ziSLYy-l8XVxcjaxmlSirXGx7v3MTLYhknvF2KvRqAymMKMKR_mGkPnprim09VVdjtHr0z0-kdqpDGbfSrht6xYA=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNgxfTl3FT6h2FjFiEv7JJx7x2hk13MouUosjLnPkl4WG8Hm9O25jrL1f1eGDqalfeLLjFM-NY52EPAvyluOrDxHt-SRuo5Wy0WWnOUs81ByV9Ff3wsODairLq1kDCyJYiaOZLowaikOYTzdqaQ4UQxDQ=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMstAt8r_48n44lofDjreTpgNKksmMq-SsM1Pquik9aVc2mbQr8Xsh5GrV8XOjruyrUZnpWlrORS_ZoYpMr_UgROt4XtcuVY57IspinBQI_jsnc5kU2lPOpKWy3ow67awNutfUmoqwAosbEMQbpDfiSjA=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMMB2WX9bjQ6_YhTh53RubgkmRMswF2ylxmDA3Z0uHziMuWPS6ZML69a54XbVyNnmlwtb_WNuFtrewb8vCFVM-sc_Iti-M6bE8mA1z0HCNZN2heoJmZXisrbnuzT7nxuZLMyMWeWwghnOR3702HWkWmJQ=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNNbzZuEgh3AgUxa8L-H3plysWQyelnGek-gGkYTkDZ6cJrnR3ko8xiJYMFO-2HcvNjlks8pNB4qbQfj5ia-9X6t19uq-7459u1HQLCnRN--LyLZD20mXUahgbZhPh3czHoN2uhyankejWRtV6e-KX5tg=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNtPlkn7z_BSZPOrZaU2fGwOxRhlPZt6NQLbEiPKnN661-MmHkV1IZGq1G_mEzn-5vubn6vjBUR2cqGAdfseb2yPXrPlL7Rg6uGWE7fshKhubkWbH-3W52x41hxlxUnhDLNFlzhs-XysKQLFwvQnfrVwQ=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPVoDgTzej6OlRP2_ZUe3EaeVbsW8ecHmCYpnex9eZ8jHCO1cpRGJFdtGRr77JeMUD5bAJk8-yNZgo0QqDirofgBuM0KA5deelJjuj9K7tbJ32bcCSKhflSwATezFR8a9h2RYK_SFoH90kRNIWA9MWYlQ=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNj6CoN_th1zjadO_NtND4zCfDzKF9QYaAnsbqh1dxvcu9hrdnyjA6Fa1-0VNIsrstq9kYkd6Dxu_PhExE5H2oDleTXiV0UivLp71tVi6xRT_oUG3cQi2MJZOtTho6HDTze3lHEjcpZw1DSqvpiy7UD-A=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczP-2eNtedu0e_ree9vmqj9TizU7GmdCcYahOextmy76aTFpaov8QIF5rvTOXeTyDqtIh93OA7i9vK2WW9HGDBbcFodCnuCpJj8-Wtay9wnbza0bnyFDEJJaGMP4oMzPz0V42I1i7XYX7KDfIDKch_92fA=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMwoz-8G4Or4xxq2cPDEaoh9cU0ar2M5nxw6Y9LiTD8IWjaixFcIZdgoXBD6mfwWTtoseKahDtVxEFnfjWWyh25PgUEt0fkPSxRyGiiP_63hdQZGa0qBW37nnHqTk0YcYWXQ8GuW2GrR8FQv_aiDCrH5Q=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOtcBPytIIE6g1ZPeCVhEutmjvNZK7j7eAsMLpXa-F8VDOBQmkVcaqi0JwzIOrruA2pv_yUmYZhC6jqLBAj9Ml5sal60pgNYtHGxNogQsMkj20eWAqOq3JVVSDceG4GoANkuA_FsTbwuBW4mEReI43glg=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNjvnrWvSCXphR2sDUQ3x75Y-7R5TxBewu4qnhoDigOKqsVbYAZ8gQlF3Idi3xbSdRt4G0GKua_u6HzZsdzVNhtnGMkB-a-KWX1G1hoHhbD-uJWJ6NbOmyXZ9O8j7ZsSHcd2qZoPQQyt58K5KaAPUycjQ=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM7dQNXMDAY6DYo_sK_98FDGgkph8ll48hYFe2dU3Nsu8Se8S7p4xJXoJSxZGpEqr6F50P4vWBnWRoKw3tpslzQEFR53CbqmNVSdrmhll-vAgFXNNbw5mKGrAEreq9Tn0zVv12IBDYCDF7rRNx1IdAooQ=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczN0j9kDQvvvVvoop5RAgM7gc4tycPjkwefQSes6NP8_p4jHqSi4GvAHpy3P_YdsWi9Rifk0v4-fjTkgpfTKTCp2BJ5iWY4gwCI2cZGhFpPukaskXJcO7wG055Mtl63zf-x9azqbmVQCXTJE7vBEOlPFYQ=w1674-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOGvzN1YxYvXHJfqVV5KcmbGwSgzZzw8zOX2S4FQPIrLupma0ivNYKk_iqULBU4g9XphQSH0b2r3TKM3yqoFDYkPtqZwVukrWiaVW96gAqjO0RR3xJGW1_kr9tZoYx8oTetEzVRFFUEG5rOAzs9Juiz1w=w530-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPNmiALxLE-DwAakOy2DvqvztAy7iLB9QUsKiGrNHyYIyo_eviOA5jbDHDq1fHKbcnT6ZRghPyf_qSACU3HYX5e4yWyDXffPzvEa1WevwCJNE0H4jc2A3CHvNTmL_T2oqmBI0xSRqE7VNlal4HdRC5x0A=w707-h942-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczN7d0X0rwy6mNQB80HNpYhVuC7qCh1281EyMtcgwuHvJltIpbsEUvepq1jhVIWtTSKkQuLkIRAoXd6Rde1JS5vyPQuZkfHhiz78poNTaFLw2_w33PwDrLlAIVWzMy6vlU-SKrHhAm_VHU9ZBvaYf1HTeQ=w530-h942-s-no-gm?authuser=0"

];

let currentLevel = 0;
let progress = 0;

function updateContent() {
    const currentImage = document.getElementById('currentImage');
    const message = document.getElementById('message');
    const progressBar = document.getElementById('loveProgress');
    const progressText = document.getElementById('progressText');
    
    currentImage.src = photos[currentLevel];
    message.textContent = messages[currentLevel];
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    
    if (progress === 100) {
        showGallery();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.getElementById('hearts-container').appendChild(heart);
    
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function createSad() {
    const sad = document.createElement('div');
    sad.className = 'sad';
    sad.innerHTML = '😢';
    sad.style.left = Math.random() * 100 + 'vw';
    document.getElementById('sad-container').appendChild(sad);
    
    sad.addEventListener('animationend', () => {
        sad.remove();
    });
}

function showGallery() {
    document.getElementById('content').style.display = 'none';
    const gallery = document.getElementById('gallery');
    gallery.classList.remove('hidden');
    
    const photoGallery = document.getElementById('photoGallery');
    photoGallery.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo;
        img.className = 'gallery-image';
        img.addEventListener('click', () => showModal(photo));
        photoGallery.appendChild(img);
    });
}

function showModal(photoUrl) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    const img = document.createElement('img');
    img.src = photoUrl;
    modal.appendChild(img);
    
    modal.addEventListener('click', () => {
        modal.remove();
    });
    
    document.body.appendChild(modal);
}

document.getElementById('wholeHeart').addEventListener('click', () => {
    if (progress < 100) {
        progress += 10;
        currentLevel = Math.min(Math.floor(progress / 10), messages.length - 1);
        updateContent();
        
        for (let i = 0; i < Math.ceil(progress / 10); i++) {
            setTimeout(() => createHeart(), i * 100);
        }
    }
});

document.getElementById('brokenHeart').addEventListener('click', () => {
    if (currentLevel > 0) {
        currentLevel--;
        progress -= 10;
        updateContent();
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createSad(), i * 100);
        }
    }
});

// Inicializar o conteúdo
updateContent();
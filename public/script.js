const pages = {
    home: `
        <section class="image-slider">
            <div class="image-container" id="image-container">
               <img src="/public/images/image1.png" alt="image" class="slider-image">
            <img src="/public/images/image2.png" alt="image" class="slider-image" style="display: none;">
            <img src="/public/images/image3.png" alt="image" class="slider-image" style="display: none;">
            </div>
        </section>
        <section class="main-adoption">
            <div class="line"></div>
            <div class="adoption">
                분양
            </div>
            <div class="adoption-list">
                <ul class="adoption-list-ul">
                    <li>
                        <a href="" target="_blank">
                            <img src="<%= cat.image_url %>" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat2.jpg" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat3.jpg" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat4.jpg" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat5.jpg" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat6.jpg" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat7.jpg" alt="고양이">
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <img src="cat/cat8.jpg" alt="고양이">
                        </a>
                    </li>
                </ul>
                <button class="btn1" type="submit" aria-label="더 많은 고양이 사진 보기">더보기</button>
            </div>
        </section>
        <section class="main-stories ">
            <div class="line"></div>
            <div class="stories ">
                분양 후기
            </div>
                <ul class="story-list">
                    <li>
                        <img src="story1.jpg" alt="고양이 후기 1">
                        <p>이 고양이는 정말 사랑스럽고 집 분위기를 밝게 해줍니다!</p>
                    </li>
                    <li>
                        <img src="story2.jpg" alt="고양이 후기 2">
                        <p>분양 후 처음 며칠은 낯설어했지만, 지금은 너무 잘 적응했어요!</p>
                    </li>
                    <li>
                        <img src="story3.jpg" alt="고양이 후기 3">
                        <p>고양이와 함께한 시간이 정말 행복합니다. 적극 추천해요!</p>
                    </li>
                </ul>
                <button class="btn1" type="submit" aria-label="더 많은 후기 보기">더보기</button>
        </section>
        <section class="main-foster">
            <div class="line"></div>
            <div class="foster-text">
                임시보호 서비스
            </div>
            <div class="foster-video">
                 <img src="video.png" alt="video">
            </div>
        </section>
    `,
    login: `
    <section class="login-section">
        <h1>로그인</h1>
        <form id="loginForm" onsubmit="handleLogin(event)">
            <div>
                <input type="text" id="id" class="input-field" placeholder="아이디" required>
            </div>
            <div>
                <input type="password" id="password" class="input-field" placeholder="비밀번호" required>
            </div>
            <div id="a">
                <a href="#" onclick="">아이디 찾기</a>|<a href="#" onclick="">비밀번호 찾기</a>|<a onclick="showSignup()">회원가입</a>
            </div>
            <div>
                <button class="btn1" type="submit">로그인</button>
            </div>
        </form>
    </section>
    `,
    signup: `
        <section class="signup-section">
            <h1>회원가입</h1>
            <form id="signupForm" onsubmit="handleLogin(event)">
                <div class="signup-id-check">
                    <div id="div-id">
                        <label for="signup-id" class="signup-label">아이디</label>
                        <input type="text" id="signup-id" class="input-field" placeholder="아이디" required>
                    </div>
                    <div id="div-btn">
                        <button id="id-check" class="btn1">중복 체크</button>
                    </div>
                </div>
                <div id="input-label">
                    <label for="signup-id" class="signup-input-label">
                        아이디는 4~20자의 영문 대/소문자 및 숫자로만 구성해야 하며,<br>띄어쓰기와 특수문자는 사용할 수 없습니다.
                    </label>
                </div>
                <div>
                    <label for="password" class="signup-label">비밀번호</label>
                    <input type="password" id="password" class="input-field" placeholder="비밀번호" required>
                </div>
                <div id="input-label">
                    <label for="password" class="signup-input-label">
                        비밀번호는 8~20자의 영문 대/소문자, 숫자,<br>특수문자를 포함해야 하며,띄어쓰기는 사용할 수 없습니다.
                    </label>
                </div>
                <div>
                    <label for="password-check" class="signup-label">비밀번호 확인</label>
                    <input type="password" id="password-check" class="input-field" placeholder="비밀번호 확인" required>
                </div>
                <div>
                    <label for="signup-name" class="signup-label">이름</label>
                    <input type="text" id="signup-name" class="input-field" placeholder="이름" required>
                </div>
                <div>
                    <label for="signup-tel" class="signup-label">전화번호</label>
                    <input type="number" id="signup-tel" class="input-field" placeholder="숫자만 입력하세요" required>
                </div>
                <div>
                    <label for="signup-birth" class="signup-label">생년월일</label>
                    <input type="number" id="signup-birth" class="input-field" placeholder="생년월일" required>
                </div>
                <div id="input-label">
                    <label for="signup-birth" class="signup-input-label">ex)2000년 01월 01일 -> 20000101</label>
                </div>
                <div>
                    <label for="signup-email" class="signup-label">이메일</label>
                    <input type="email" id="signup-email" class="input-field" placeholder="이메일" required>
                </div>
                <div id="signup-btn">
                    <button class="btn1" type="submit">회원가입</button>
                </div>
            </form>
        </section>
    `,
    intro: `
        <section>
            <h1>소개 페이지</h1>
            <p>고양이 사랑방은 고양이와 사람을 이어주는 따뜻한 공간입니다. 여기는 소개 페이지입니다.</p>
        </section>
    `,

    step: `
        <section class="procedure-section">
            <h1>분양 절차</h1>
            <ol class="procedure-steps">
                <li>1단계: 신청서 작성</li>
                <li>2단계: 상담 및 검토</li>
                <li>3단계: 분양 계약</li>
                <li>4단계: 새로운 가족 맞이</li>
            </ol>
        </section>
    `,


};

function showHome() {
    document.getElementById('app').innerHTML = pages.home;
    history.pushState({ page: 'home' }, '홈', window.location.href);
    startImageSlider();
}

// function startImageSlider() {
//     const images = document.querySelectorAll('.slider-image');
//     let currentIndex = 0;

//     setInterval(() => {
//         images[currentIndex].style.display = 'none';
//         currentIndex = (currentIndex + 1) % images.length;

//         images[currentIndex].style.display = 'block';
//     }, 5000);
// }
// ======================================================

// $(function () {
//     $(".image-container").animate({ marginLeft: -$(".image-container").width() }, 1000);
// })

$(document).ready(function () {
    let currentIndex = 0;
    const slideCount = $(".slider-image").length;
    const slideWidth = $(".image-slider").width();

    // 이미지 컨테이너 초기 크기 설정
    $(".image-container").css("width", slideCount * slideWidth);

    function slideImages() {
        currentIndex++;

        $(".image-container").animate({ left: -currentIndex * slideWidth }, 1000, function () {
            if (currentIndex >= slideCount - 1) {
                currentIndex = 0;
                $(".image-container").css("left", 0);
            }
        });
    }

    // 3초마다 자동 슬라이드
    setInterval(slideImages, 3000);
});

// ======================================================

function showLogin() {
    document.getElementById('app').innerHTML = pages.login;
    history.pushState({ page: 'login' }, '로그인', window.location.href);
}

async function handleLogin(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    const formData = { id, password };

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('로그인 성공!');
            showHome();
        } else {
            alert('로그인 실패. 아이디 또는 비밀번호를 확인해주세요.');
        }
    } catch (error) {
        console.error('에러 발생:', error);
        alert('서버와의 연결 중 문제가 발생했습니다.');
    }
}

function showSignup() {
    document.getElementById('app').innerHTML = pages.signup;
    history.pushState({ page: 'signup' }, '회원가입', window.location.href);
}

async function checkId() {
    const id = document.getElementById('id').value;

    if (!id) {
        alert('아이디를 입력해주세요.');
        return;
    }

    const idRegex = /^[a-z0-9]{4,16}$/;
    if (!idRegex.test(id)) {
        alert('아이디는 영문 소문자와 숫자만 포함하며, 4~16자여야 합니다.');
        return;
    }

    try {
        const response = await fetch(`/api/check-id?id=${encodeURIComponent(id)}`);
        const data = await response.json();

        if (data.exists) {
            alert('이미 사용 중인 아이디입니다.');
        } else {
            alert('사용 가능한 아이디입니다.');
        }
    } catch (error) {
        console.error('아이디 중복 확인 오류:', error);
        alert('아이디 중복 확인 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
}

async function handleSignup(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const name = document.getElementById('name').value;
    const phone =
        document.getElementById('phone1').value + '-' +
        document.getElementById('phone2').value + '-' +
        document.getElementById('phone3').value;
    const email = document.getElementById('email').value;

    if (!id || !password || !confirmPassword || !name || !phone || !email) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
    }

    if (password.length < 8) {
        alert('비밀번호는 8자 이상이어야 합니다.');
        return;
    }

    const formData = { id, password, name, phone, email };

    try {
        const idResponse = await fetch(`/api/check-id?id=${id}`);
        const idData = await idResponse.json();
        if (idData.exists) {
            alert('이미 사용 중인 아이디입니다.');
            return;
        }

        const response = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('회원가입 성공!');
            showHome();
        } else {
            alert('회원가입 실패. 다시 시도해주세요.');
        }
    } catch (error) {
        console.error('에러 상세:', error);
        const errorMessage = error.message ? error.message : '알 수 없는 오류';

        alert(`서버와의 연결 중 문제가 발생했습니다: ${errorMessage}`);
    }
}

//소개 페이지
function showIntro() {
    document.getElementById('app').innerHTML = pages.intro;
    history.pushState({ page: 'intro' }, '소개', window.location.href);
}

//분양 절차 페이지
function showStep() {
    document.getElementById('app').innerHTML = pages.step;
    history.pushState({ page: 'step' }, '분양 절차', window.location.href);
}

showHome();
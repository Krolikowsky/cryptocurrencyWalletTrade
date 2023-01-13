const onBoardingCircleFirst = document.querySelector(".onBoarding__paginationCircle--first")
const onBoardingCircleSecond = document.querySelector(".onBoarding__paginationCircle--second")
const onBoardingCircleThird = document.querySelector(".onBoarding__paginationCircle--third")
const onBoardingSlider = document.querySelector(".onBoarding__slider")

onBoardingCircleFirst.addEventListener("click", () => {
    onBoardingCircleFirst.classList.add("onBoarding__paginationCircle--active")
    onBoardingCircleSecond.classList.remove("onBoarding__paginationCircle--active")
    onBoardingCircleThird.classList.remove("onBoarding__paginationCircle--active")
    onBoardingSlider.style.transition = "0.3s"
    onBoardingSlider.style.transform = "translateX(0vw)"
})

onBoardingCircleSecond.addEventListener("click", () => {
    onBoardingCircleFirst.classList.remove("onBoarding__paginationCircle--active")
    onBoardingCircleSecond.classList.add("onBoarding__paginationCircle--active")
    onBoardingCircleThird.classList.remove("onBoarding__paginationCircle--active")
    onBoardingSlider.style.transition = "0.3s"
    onBoardingSlider.style.transform = "translateX(calc(-100vw + 16px))"
})

onBoardingCircleThird.addEventListener("click", () => {
    onBoardingCircleFirst.classList.remove("onBoarding__paginationCircle--active")
    onBoardingCircleSecond.classList.remove("onBoarding__paginationCircle--active")
    onBoardingCircleThird.classList.add("onBoarding__paginationCircle--active")
    onBoardingSlider.style.transition = "0.3s"
    onBoardingSlider.style.transform = "translateX(calc(-200vw + 32px))"
})
const newsSliderCircleFirst = document.querySelector(".newsSlider__paginationCircle--first")
const newsSliderCircleSecond = document.querySelector(".newsSlider__paginationCircle--second")
const newsSliderCircleThird = document.querySelector(".newsSlider__paginationCircle--third")
const newsSliderSlider = document.querySelector(".newsSlider__slider")

newsSliderCircleFirst.addEventListener("click", () => {
    newsSliderCircleFirst.classList.add("newsSlider__paginationCircle--active")
    newsSliderCircleSecond.classList.remove("newsSlider__paginationCircle--active")
    newsSliderCircleThird.classList.remove("newsSlider__paginationCircle--active")
    newsSliderSlider.style.transition = "0.3s"
    newsSliderSlider.style.transform = "translateX(0vw)"
})

newsSliderCircleSecond.addEventListener("click", () => {
    newsSliderCircleFirst.classList.remove("newsSlider__paginationCircle--active")
    newsSliderCircleSecond.classList.add("newsSlider__paginationCircle--active")
    newsSliderCircleThird.classList.remove("newsSlider__paginationCircle--active")
    newsSliderSlider.style.transition = "0.3s"
    newsSliderSlider.style.transform = "translateX(calc(-100vw + 16px))"
})

newsSliderCircleThird.addEventListener("click", () => {
    newsSliderCircleFirst.classList.remove("newsSlider__paginationCircle--active")
    newsSliderCircleSecond.classList.remove("newsSlider__paginationCircle--active")
    newsSliderCircleThird.classList.add("newsSlider__paginationCircle--active")
    newsSliderSlider.style.transition = "0.3s"
    newsSliderSlider.style.transform = "translateX(calc(-200vw + 32px))"
})
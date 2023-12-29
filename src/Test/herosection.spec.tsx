import { render, screen } from "@testing-library/react"
import HeroSection from "../Components/HeroSection"

describe("Hero", () => {
    test("Render Well", () => {
        render(<HeroSection />)
        const bannerImg = screen.getByRole("presentation", {
            name: "vector"
        })
        expect(bannerImg).toBeInTheDocument()

        const bannerHeader1 = screen.getByRole("heading", {
            level: 2
        })
        expect(bannerHeader1).toBeInTheDocument()

        const content1 = screen.getByRole("paragraph")
        expect(content1).toBeInTheDocument()

        const vector1 = screen.getByRole("presentation", {
            name:"banner"
        })
        expect(vector1).toBeInTheDocument()
    })
});



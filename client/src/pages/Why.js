import React from 'react'
import "../asset/css/why.css"

const Why = () => {
    return (
        <section id="features" class="features">
            <div class="container">
                <h2 class="section-title">Why Choose Us</h2>
                <div class="feature-grid">
                    <div class="feature-item">
                        <div class="feature-icon">📚</div>
                        <h3>Vast Collection</h3>
                        <p>Access to millions of books across all genres</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🧠</div>
                        <h3>Smart Recommendations</h3>
                        <p>AI-powered suggestions based on your reading preferences</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">💬</div>
                        <h3>Community</h3>
                        <p>Connect with fellow book lovers and join reading groups</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">📱</div>
                        <h3>Read Anywhere</h3>
                        <p>Sync your reading progress across all your devices</p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Why
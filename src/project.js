import betting from "./components/pictures/Betting.jpeg"
import ai_trading from "./components/pictures/ai-trading-agent.png"
import stt from "./components/pictures/STT.png"


const project = [
  {
    "title":"Automate Betting Project",
    "requirement": "This project is a comprehensive prediction system that takes historical sports data and real-time inputs to generate betting recommendations. The system processes multi-modal data including team statistics, player performance metrics, weather conditions, and betting market data to predict match outcomes and identify value betting opportunities.",
    "description": "The machine learning component uses PyTorch to implement a custom CNN-LSTM hybrid architecture for time series prediction and pattern recognition. The system includes custom embedding layers for categorical features, attention mechanisms for temporal weighting, and probabilistic output layers. The backend API is built with FastAPI for real-time predictions, while the frontend uses React.js for data visualization and betting recommendation display. Custom loss functions combine cross-entropy with regularization terms to optimize for betting profitability rather than simple accuracy.",
    "upcoming": "The project achieved around 70% - 80% on validation data. Next steps include improving model accuracy through ensemble methods and advanced feature engineering. The system will then be generalized to handle different types of betting scenarios, with real-time data integration and automated prediction processes.",
    "image":betting
  },
  {
    "title": "AI Hedgefund - Intelligent Financial Analysis System",
    "requirement": "This project is an intelligent financial analysis and portfolio management system that leverages AI agents to make investment decisions based on Warren Buffett's principles. The system analyzes stocks using financial data and provides trading recommendations through a REST API interface.",
    "description": "The system is built with Rust using Actix-web framework for the backend server, integrates with multiple LLM providers (Anthropic, Groq, DeepSeek, OpenAI) for AI analysis, and uses Polars for efficient data processing. It features specialized AI agents including Warren Buffett Agent for fundamental analysis, Risk Manager Agent for position sizing, and Portfolio Manager Agent for trading decisions.",
    "upcoming": "The project includes performance optimization plans such as parallel processing for multiple tickers, enhanced data caching, batch processing capabilities, and database integration. Future enhancements include agent selection customization, real-time progress tracking, scheduled analysis features, and comprehensive test coverage implementation.",
    "source_code":"https://github.com/Sameam/rust_ai_trading",
    "image": ai_trading
  },
  {
     "title": "Whisper Service in Rust",
     "requirement": "This project is a high-performance, real-time speech recognition service that provides both Voice Activity Detection (VAD) and speech transcription capabilities through WebSocket connections. The project uses OpenAI's Whisper model for transcription and Silero VAD for voice detection, supporting multiple audio formats including PCM16, FLOAT32, μ-law, and A-law.",
     "description": "The machine learning part is implemented using Rust with whisper-rs bindings for Whisper model integration and silero-vad-rs for voice activity detection. The service is built with Actix-web framework providing WebSocket endpoints for real-time audio processing, featuring SIMD-optimized audio conversion, automatic sample rate conversion to 16kHz, and session-based processing with concurrent handling capabilities.",
     "upcoming": "The project is currently in research and development phase. While functional for real-time speech recognition, it's experimental and not production-ready. Ongoing improvements include optimizing audio format support, enhancing transcription quality across different formats, adding support for containerized audio formats (WAV, FLAC), improving code support, and implementing advanced noise reduction preprocessing algorithms.",
     "source_code":"https://github.com/Sameam/whisper_rust",
     "image":stt
  }
]


export default project
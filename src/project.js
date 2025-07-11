import betting from "./components/pictures/Betting.jpeg"
import ai_trading from "./components/pictures/ai-trading-agent.png"
import stt from "./components/pictures/STT.png"


const project = [
  {
    "title":"Automate Betting Project",
    "requirement":"This project is mainly a simple web interface that will take user input and make prediction. The dataset that used in this project includes: dry_bean dataset and CIFAR-10 dataset.",
    "description":"The machine learning part is done using python Sklearn and Tensorflow to produce an image recognition. The web interface is done using React and backend is done using Flask server.",
    "upcoming":"The project is still an ongoing project. The Tensorflow server and web application for image upload and recognition is not finished yet. However, the dry bean prediction is 90% done. ",
    "source_code":"https://github.com/Sameam/machine_learning",
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
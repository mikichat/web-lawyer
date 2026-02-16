import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
      <header className="bg-slate-800 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>⚖️</span> 변호사 김변호 법률사무소
          </h1>
          <nav className="space-x-6 hidden md:flex text-slate-200 font-medium">
            <a href="#" className="hover:text-white transition">업무분야</a>
            <a href="#" className="hover:text-white transition">구성원</a>
            <a href="#" className="hover:text-white transition">오시는길</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-slate-900">정직과 신뢰로 보답하겠습니다</h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">당신의 든든한 법률 파트너, 최선의 결과를 위해 함께 고민합니다.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-10 rounded-lg text-lg shadow-lg transition duration-300">
              무료 법률 상담
            </button>
            <button className="bg-white hover:bg-gray-100 text-slate-800 border-2 border-slate-800 font-bold py-3 px-10 rounded-lg text-lg shadow-md transition duration-300">
              전화 연결
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition duration-300 border-t-4 border-slate-800">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">형사</h3>
            <p className="text-gray-600">음주운전, 사기, 성범죄 등 긴급 조력이 필요한 상황</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition duration-300 border-t-4 border-slate-800">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">민사</h3>
            <p className="text-gray-600">금전 채무, 손해배상, 부동산 분쟁의 명쾌한 해결</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition duration-300 border-t-4 border-slate-800">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">가사</h3>
            <p className="text-gray-600">이혼, 재산분할, 양육권 등 따뜻하고 섬세한 상담</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition duration-300 border-t-4 border-slate-800">
            <h3 className="text-2xl font-bold mb-3 text-slate-800">상속</h3>
            <p className="text-gray-600">유산 상속, 유류분 반환 등 복잡한 상속 문제 해결</p>
          </div>
        </section>

        <section className="bg-slate-100 rounded-3xl p-10 shadow-inner">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">왜 김변호 법률사무소인가?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">10년 이상의 풍부한 실무 경험</h4>
                    <p className="text-gray-700">다양한 승소 사례를 통해 축적된 노하우로 사건을 분석합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">의뢰인 중심의 1:1 맞춤 상담</h4>
                    <p className="text-gray-700">변호사가 직접 상담부터 서면 작성까지 꼼꼼하게 챙깁니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">투명하고 합리적인 수임료</h4>
                    <p className="text-gray-700">과도한 수임료를 요구하지 않으며, 정직하게 안내합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
               <div className="text-9xl grayscale opacity-20">⚖️</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12 px-6 mt-16 text-center">
        <p className="mb-4 text-xl font-bold text-white italic">김변호 법률사무소</p>
        <p className="text-slate-400 mb-2">서울특별시 서초구 서초대로 123, 법조빌딩 405호</p>
        <p className="text-slate-400 mb-6">대표번호: 02-123-4567 | 이메일: info@kimlaw.example.com</p>
        <p className="text-slate-500 text-xs">© 2026 Lawyer Kim Law Firm. All rights reserved.</p>
      </footer>
    </div>
  );
}

        const apiKey = ""; 

        const tabData = {
            origin: {
                title: "A Student-Led Revolution",
                content: `Voxeon Labs started in a college dorm room as a BTech student initiative. We noticed that high-end AI was inaccessible to local institutions. We decided to build it ourselves. Our team consists of engineering students who are passionate about making the future of vision accessible to everyone.`
            },
            services: {
                title: "Technical Capabilities",
                content: `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 class="text-emerald-400 font-bold mb-2 uppercase">Vision Engine</h4>
                            <p>Real-time facial landmarking and recognition with 99.8% accuracy on edge devices.</p>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 class="text-emerald-400 font-bold mb-2 uppercase">HR API Hub</h4>
                            <p>Seamlessly push attendance data to SAP, Zoho, or custom ERP via secure webhooks.</p>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 class="text-emerald-400 font-bold mb-2 uppercase">Liveness Check</h4>
                            <p>Anti-spoofing technology to prevent photo/video-based attendance fraud.</p>
                        </div>
                        <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                            <h4 class="text-emerald-400 font-bold mb-2 uppercase">Analytics Dashboard</h4>
                            <p>Predictive absenteeism modeling and peak-hour density heatmaps.</p>
                        </div>
                    </div>
                `
            },
            pricing: {
                title: "Requirement-Based Tiers",
                content: `
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                            <div>
                                <h4 class="font-black text-white uppercase tracking-wider">Foundation Tier</h4>
                                <p class="text-xs text-slate-400">Up to 100 users • Standard Support • Basic API</p>
                            </div>
                            <span class="text-xl font-orbitron font-black text-emerald-400">₹12,000</span>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl">
                            <div>
                                <h4 class="font-black text-white uppercase tracking-wider">Growth Pack</h4>
                                <p class="text-xs text-slate-400">Up to 500 users • Priority Support • Full ERP Sync</p>
                            </div>
                            <span class="text-xl font-orbitron font-black text-white">₹45,000</span>
                        </div>
                        <div class="flex items-center justify-between p-5 bg-white/10 border border-white/20 rounded-2xl shadow-xl">
                            <div>
                                <h4 class="font-black text-white uppercase tracking-wider">Enterprise Scaler</h4>
                                <p class="text-xs text-slate-400">Unlimited users • Edge Hardware Integration • Dedicated Core</p>
                            </div>
                            <span class="text-xl font-orbitron font-black text-emerald-400">₹1,00,000</span>
                        </div>
                        <p class="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-4">* Custom deployment costs vary based on site requirements</p>
                    </div>
                `
            },
            student: {
                title: "The BTech DNA",
                content: `We aren't corporate suits; we are builders. Our initiative leverages the creative energy and problem-solving skills learned in the engineering labs. This startup is proof that student-led projects can solve real-world enterprise problems with fresh perspectives.`
            }
        };

        function switchTab(id) {
            document.querySelectorAll('[id^="tab-btn-"]').forEach(btn => btn.classList.remove('tab-active'));
            document.getElementById(`tab-btn-${id}`).classList.add('tab-active');
            
            const content = document.getElementById('tab-content');
            content.style.opacity = 0;
            
            setTimeout(() => {
                const titleEl = document.getElementById('tab-title');
                const htmlEl = document.getElementById('tab-html');
                if(titleEl) titleEl.innerText = tabData[id].title;
                if(htmlEl) htmlEl.innerHTML = tabData[id].content;
                content.style.opacity = 1;
            }, 250);
        }

        function openAdminSection() {
            document.getElementById('admin-section').classList.remove('hidden');
            document.getElementById('admin-password').value = '';
            document.getElementById('admin-error').classList.add('hidden');
            document.getElementById('admin-content').classList.add('hidden');
        }

        function closeAdminSection() {
            document.getElementById('admin-section').classList.add('hidden');
        }

        function loadDemoRequests() {
            const requestList = document.getElementById('demo-requests');
            const storedRequests = JSON.parse(localStorage.getItem('voxeonDemoRequests') || '[]');
            if (storedRequests.length === 0) {
                requestList.innerHTML = 'No requests yet.';
                return;
            }
            requestList.innerHTML = '';
            storedRequests.forEach(req => {
                const item = document.createElement('li');
                item.className = 'p-3 rounded-lg bg-slate-900/80 border border-emerald-500/20 mb-2';
                item.innerHTML = `<strong>${req.name}</strong> (${req.org}, ${req.email})<br><span class="text-slate-400">${req.interest}</span><br>${req.message}`;
                requestList.appendChild(item);
            });
        }

        function verifyAdminPassword() {
            const pw = document.getElementById('admin-password').value;
            const error = document.getElementById('admin-error');
            const content = document.getElementById('admin-content');
            if(btoa(pw) === 'dm94MDAxY2Vv') {
                error.classList.add('hidden');
                content.classList.remove('hidden');
                loadDemoRequests();
            } else {
                error.classList.remove('hidden');
                content.classList.add('hidden');
            }
        }

        function clearDemoRequests() {
            localStorage.removeItem('voxeonDemoRequests');
            loadDemoRequests();
        }

        async function handleDemoRequest(event) {
            event.preventDefault();
            const name = document.getElementById('request-name').value.trim();
            const org = document.getElementById('request-org').value.trim();
            const email = document.getElementById('request-email').value.trim();
            const interest = document.getElementById('request-interest').value;
            const message = document.getElementById('request-message').value.trim();
            const requestList = document.getElementById('demo-requests');
            const submitBtn = event.target.querySelector('button[type="submit"]');

            if (!name || !org || !email || !message) {
                alert('Please fill in all fields of the request form.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Processing...';

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, org, email, interest, message })
                });

                if (!response.ok) throw new Error('Server error');

                const newReq = { name, org, email, interest, message };
                const storedRequests = JSON.parse(localStorage.getItem('voxeonDemoRequests') || '[]');
                storedRequests.unshift(newReq);
                localStorage.setItem('voxeonDemoRequests', JSON.stringify(storedRequests));
                
                // Update UI if admin section is open
                const content = document.getElementById('admin-content');
                if (!content.classList.contains('hidden')) {
                    loadDemoRequests();
                }

                alert('Transmission Received. Our AI Core will process your request.');
                document.getElementById('demo-request-form').reset();
            } catch (error) {
                alert('Failed to submit request. Please try again later.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        }

        const staff = [
            { id: 1, name: "Rahul M.", time: "08:55", status: "ontime" },
            { id: 2, name: "Anjali S.", time: "09:04", status: "grace" },
            { id: 3, name: "Kevin P.", time: "09:25", status: "late" },
            { id: 4, name: "Meera R.", time: "09:02", status: "grace" },
            { id: 5, name: "Zakir H.", time: "08:45", status: "ontime" },
            { id: 6, name: "Arya B.", time: "09:40", status: "late" }
        ];

        function resetLab() {
            const container = document.getElementById('queue-container');
            if(!container) return;
            container.innerHTML = '';
            document.getElementById('bucket-ontime').innerHTML = '';
            document.getElementById('bucket-grace').innerHTML = '';
            document.getElementById('bucket-late').innerHTML = '';
            
            staff.forEach(person => {
                const el = document.createElement('div');
                el.className = `sort-item glass-card p-5 rounded-2xl border-l-4 border-slate-600 flex justify-between items-center bg-slate-900/80`;
                el.id = `staff-${person.id}`;
                el.innerHTML = `
                    <span class="font-black text-white text-sm">${person.name}</span>
                    <span class="text-[10px] font-mono text-emerald-400 font-bold">${person.time}</span>
                `;
                container.appendChild(el);
            });
            const trigger = document.getElementById('sort-trigger');
            if(trigger) {
                trigger.disabled = false;
                trigger.innerText = "Ignite AI Core";
            }
        }

        async function startSorting() {
            const trigger = document.getElementById('sort-trigger');
            trigger.disabled = true;
            trigger.innerText = "Processing Logic...";

            for (const person of staff) {
                const el = document.getElementById(`staff-${person.id}`);
                el.style.transform = "scale(0.8) translateY(-40px)";
                el.style.opacity = "0.2";
                await new Promise(r => setTimeout(r, 650));
                
                const bucket = document.getElementById(`bucket-${person.status}`);
                el.className = `sort-item glass-card p-6 rounded-2xl border-l-4 flex justify-between items-center mb-5 bg-slate-950/80 shadow-lg ${
                    person.status === 'ontime' ? 'border-emerald-500' : 
                    person.status === 'grace' ? 'border-yellow-500' : 'border-rose-500'
                }`;
                el.style.transform = "scale(1.05) translateY(0)";
                el.style.opacity = "1";
                bucket.appendChild(el);
                setTimeout(() => { el.style.transform = "scale(1)"; }, 200);
            }
            trigger.innerText = "Deployment Complete";
        }

        // --- GEMINI API INTEGRATION ---
        async function fetchWithRetry(url, options, retries = 5, backoff = 1000) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return await response.json();
            } catch (error) {
                if (retries > 0) {
                    await new Promise(resolve => setTimeout(resolve, backoff));
                    return fetchWithRetry(url, options, retries - 1, backoff * 2);
                }
                throw error;
            }
        }

        async function generatePolicy() {
            const org = document.getElementById('org-type').value;
            const targetOrg = document.getElementById('target-org-name').value || "The Client Entity";
            const btn = document.getElementById('policy-btn');
            const res = document.getElementById('policy-result');
            
            btn.disabled = true;
            btn.innerHTML = '<div class="loader w-8 h-8 border-4 border-t-transparent rounded-full mx-auto"></div>';
            res.classList.remove('hidden');
            res.innerHTML = '<p class="animate-pulse text-emerald-400 font-black text-center tracking-widest text-sm uppercase">Voxeon AI Core Drafting Legal Protocol...</p>';

            // Simulate AI processing delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Generate mock policy content based on inputs
            const mockPolicy = `
                <p><strong class="text-emerald-400">PARTIES TO THE AGREEMENT</strong></p>
                <p>This AI Attendance Policy Agreement ("Agreement") is entered into on ${new Date().toLocaleDateString()} between Voxeon Labs ("Provider"), an innovative technology solutions company, and ${targetOrg} ("Client"), a ${org.toLowerCase()} entity.</p>

                <p><strong class="text-emerald-400">SCOPE OF SERVICES</strong></p>
                <p>The Provider shall deploy VisionAttend AI, an advanced facial recognition attendance system, optimized for ${org.toLowerCase()} environments with edge-computing capabilities and real-time processing.</p>

                <p><strong class="text-emerald-400">DATA PRIVACY & SECURITY</strong></p>
                <p>All biometric data shall be encrypted using AES-256 standards and processed locally on edge devices. No facial data shall be transmitted to external servers without explicit Client consent. Data retention shall not exceed 30 days unless otherwise specified.</p>

                <p><strong class="text-emerald-400">TECHNICAL SPECIFICATIONS</strong></p>
                <p>The system shall maintain 99.8% accuracy with 0.3-second processing latency. Punctuality thresholds: On-time (within 5 minutes), Grace Period (5-15 minutes), Late (beyond 15 minutes).</p>

                <p><strong class="text-emerald-400">COMPLIANCE & REGULATIONS</strong></p>
                <p>This Agreement complies with applicable data protection laws. The Client acknowledges the cutting-edge nature of AI development and accepts associated technological risks.</p>

                <p><strong class="text-emerald-400">TERMINATION</strong></p>
                <p>Either party may terminate this Agreement with 30 days written notice. Upon termination, all data shall be securely erased from Provider systems.</p>
            `;

            const signatureBlock = `
                <div class="mt-16 pt-12 border-t border-emerald-500/30 grid grid-cols-2 gap-12">
                    <div class="space-y-4">
                        <p class="text-[10px] uppercase tracking-widest text-slate-500 font-black">Authorized Signatory - Provider</p>
                        <div class="py-4 font-orbitron italic text-emerald-400 border-b border-emerald-500/50">
                            Voxeon Labs CEO - Executive Director
                        </div>
                        <p class="text-xs font-bold text-white uppercase">Voxeon Labs R&D</p>
                    </div>
                    <div class="space-y-4">
                        <p class="text-[10px] uppercase tracking-widest text-slate-500 font-black">Authorized Signatory - Client</p>
                        <div class="py-4 text-slate-600 italic border-b border-white/20">
                            [Digital Signature Required]
                        </div>
                        <p class="text-xs font-bold text-white uppercase">${targetOrg}</p>
                    </div>
                </div>
                <div class="mt-10 text-center">
                     <p class="text-[9px] text-slate-600 uppercase font-black tracking-widest">Technically Verified by Voxeon AI Core • CC: Thrissur R&D Office(mock aggrement)</p>
                </div>
            `;

            res.innerHTML = `
                <div class="prose prose-invert max-w-none text-slate-200 leading-loose text-lg font-medium">
                    <div class="text-center mb-10">
                        <i class="fa-solid fa-expand text-emerald-500 text-5xl mb-4"></i>
                        <h2 class="text-3xl font-orbitron font-black uppercase text-white tracking-tighter">Voxeon Protocol v2.5</h2>
                    </div>
                    ${mockPolicy}
                    ${signatureBlock}
                    <div class="text-center mt-12">
                        <button id="download-agreement-btn" class="btn-primary px-8 py-4 rounded-2xl text-lg font-black">
                            <i class="fa-solid fa-download mr-3"></i>Download Agreement
                        </button>
                    </div>
                </div>`;

            document.getElementById('download-agreement-btn').addEventListener('click', () => {
                downloadAgreement(targetOrg);
            });

            btn.disabled = false;
            btn.innerText = "Regenerate Contract ✨";
        }

        async function downloadAgreement(clientName) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({ unit: 'pt', format: 'a4' });
            const elementToPrint = document.getElementById('policy-result');
            
            const originalBtn = document.getElementById('download-agreement-btn');
            if(originalBtn) originalBtn.style.display = 'none';

            await doc.html(elementToPrint, {
                callback: function (doc) {
                    doc.save(`Voxeon_Agreement_${clientName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
                    if(originalBtn) originalBtn.style.display = 'inline-block';
                },
                x: 10,
                y: 10,
                width: 575,
                windowWidth: 800,
                autoPaging: 'text',
                html2canvas: {
                    scale: 0.7,
                    useCORS: true,
                    backgroundColor: '#020617'
                }
            });
        }

        window.onload = function() {
            resetLab();
            switchTab('origin');
        };


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const attachListener = (id, event, handler) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, handler);
    };

    // Issue #11: Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('hidden');
            const icon = this.querySelector('i');
            const isExpanded = !navLinks.classList.contains('hidden');
            icon.className = isExpanded ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            this.setAttribute('aria-expanded', String(isExpanded));
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.add('hidden');
                    mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    attachListener('tab-btn-origin', 'click', () => switchTab('origin'));
    attachListener('tab-btn-services', 'click', () => switchTab('services'));
    attachListener('tab-btn-pricing', 'click', () => switchTab('pricing'));
    attachListener('tab-btn-student', 'click', () => switchTab('student'));
    attachListener('reset-lab-btn', 'click', resetLab);
    attachListener('sort-trigger', 'click', startSorting);
    attachListener('policy-btn', 'click', generatePolicy);
    attachListener('close-admin-btn', 'click', closeAdminSection);
    attachListener('verify-admin-btn', 'click', (e) => { e.preventDefault(); verifyAdminPassword(); });
    attachListener('clear-requests-btn', 'click', clearDemoRequests);
    attachListener('demo-request-form', 'submit', handleDemoRequest);
});

/**
 * 프로젝트 모달 기능 관리
 */
document.addEventListener('DOMContentLoaded', function() {
  // 모달 요소 생성
  if (!document.getElementById('projectModal')) {
    const modalHTML = `
      <div id="projectModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" id="projectModalContent">
              <div class="text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">로딩중...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // 프로젝트 미리보기 팝오버 설정
  $('.project-link').popover({
    trigger: 'hover',
    html: true,
    placement: 'top',
    delay: { show: 300, hide: 100 },
    content: function() {
      const projectId = $(this).data('project');
      return `
        <div class="project-preview">
          <img src="images/projects/${projectId}-preview.jpg" alt="${projectId} 미리보기" style="max-width: 200px;">
          <p class="mt-2">${$(this).data('summary')}</p>
        </div>
      `;
    }
  });

  // 프로젝트 링크 클릭 이벤트 처리
  $('.project-link').on('click', function(e) {
    e.preventDefault();
    const projectId = $(this).data('project');
    openProjectModal(projectId);
  });

  // 모달 닫을 때 내용 초기화
  $('#projectModal').on('hidden.bs.modal', function() {
    document.getElementById('projectModalContent').innerHTML = `
      <div class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">로딩중...</span>
        </div>
      </div>
    `;
  });
});

/**
 * 프로젝트 모달 열기
 * @param {string} projectId - 프로젝트 ID
 */
function openProjectModal(projectId) {
  const modal = $('#projectModal');
  const modalContent = document.getElementById('projectModalContent');
  
  // 모달 표시
  modal.modal('show');
  
  // 프로젝트 HTML 불러오기
  fetch(`projects/${projectId}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('프로젝트 정보를 불러올 수 없습니다.');
      }
      return response.text();
    })
    .then(html => {
      modalContent.innerHTML = html;
    })
    .catch(error => {
      modalContent.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${error.message}
        </div>
      `;
    });
} 
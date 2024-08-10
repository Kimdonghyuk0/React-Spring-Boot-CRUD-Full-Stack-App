package potato.dongHyukSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import potato.dongHyukSpring.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

}
